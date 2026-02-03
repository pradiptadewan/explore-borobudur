/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// --- KONFIGURASI ---
const inputDir = './public/images';           // Folder sumber foto asli
const outputDir = './public/images_optimized'; // Folder hasil sementara
const maxWidth = 1200;                        // Lebar maksimal (1200px sudah sangat tajam untuk web)
const quality = 80;                           // Kualitas 80% (Mata manusia sulit membedakan, tapi size turun jauh)

// Fungsi untuk membuat folder jika belum ada
const ensureDir = (dir) => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

// Fungsi rekursif untuk memproses folder dan sub-folder
async function processDirectory(currentPath) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
        const sourcePath = path.join(currentPath, entry.name);
        
        // Tentukan path output yang sesuai (menjaga struktur folder)
        const relativePath = path.relative(inputDir, sourcePath);
        const destPath = path.join(outputDir, relativePath);

        if (entry.isDirectory()) {
            // Jika folder, ulangi proses di dalamnya
            ensureDir(destPath);
            await processDirectory(sourcePath);
        } else if (entry.isFile()) {
            // Cek apakah ini file gambar
            const ext = path.extname(entry.name).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
                
                ensureDir(path.dirname(destPath)); // Pastikan folder tujuan ada
                console.log(`⏳ Memproses: ${relativePath}`);

                try {
                    let pipeline = sharp(sourcePath);
                    const metadata = await pipeline.metadata();

                    // 1. Resize jika gambar terlalu lebar (misal > 1200px)
                    if (metadata.width > maxWidth) {
                        pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
                    }

                    // 2. Kompresi sesuai format aslinya
                    if (ext === '.jpg' || ext === '.jpeg') {
                        pipeline = pipeline.jpeg({ quality: quality, mozjpeg: true });
                    } else if (ext === '.png') {
                        pipeline = pipeline.png({ quality: quality, compressionLevel: 8, palette: true });
                    } else if (ext === '.webp') {
                        pipeline = pipeline.webp({ quality: quality });
                    }

                    await pipeline.toFile(destPath);
                    console.log(`✅ Selesai: ${relativePath}`);
                } catch (err) {
                    console.error(`❌ Gagal memproses ${entry.name}:`, err);
                }
            }
        }
    }
}

// --- JALANKAN SCRIPT ---
console.log("🚀 Memulai optimasi gambar...");
ensureDir(outputDir);

processDirectory(inputDir).then(() => {
    console.log("\n==================================================");
    console.log("🎉 SEMUA SELESAI!");
    console.log("Silakan cek folder 'public/images_optimized'.");
    console.log("Jika hasilnya bagus, hapus folder 'images' lama dan ganti dengan yang baru.");
    console.log("==================================================");
});