## Cara Menjalankan Project Ini

1. Clone repo
2. Jalankan `composer install`
3. Jalankan `npm install`
4. Copy `.env.example` ke `.env`
5. Jalankan `php artisan key:generate`
6  Ambil database dari file migrasi yang saya buat `php artisan migrate`
7. Jalankan `php artisan serve` dan `npm run dev`
8. Kalo Projectnya Blank, itu artinya belum ada Barang yang ditambahkan, login sebagai admin untuk Menambah produk terlebih dahulu.
9. Solusi kalo Project awal di buka itu blank, ambil seeder data Admin dulu caranya  php artisan db:seed
10. Setelah itu masuk dengan email : admin@gmail.com dan password : admin123
11. di admin, silahkan untuk tambah barang
12. setelah tambah barang, coba lah untuk register sebagai pelanggan dan coba untuk memesan beberapa produk.
13. 
