## Cara Menjalankan Project Ini

1. Clone repo
2. Jalankan `composer install`
3. Jalankan `npm install`
4. Copy `.env.example` ke `.env`   cp .env.example .env
5. Jalankan `php artisan key:generate`
6. Setting dulu database nya di env. sesuaikan terlebih dahulu
6  jika sudah ambil database dari file migrasi yang saya buat `php artisan migrate`
7. Jalankan `php artisan serve` dan `npm run dev`
8. Kalo Projectnya Blank, itu artinya belum ada Barang yang ditambahkan, login sebagai admin untuk Menambah produk terlebih dahulu.
9. Solusi kalo Project awal di buka itu blank, ambil seeder data Admin dulu caranya  php artisan db:seed
10. cara Login nya, Akses url tambahan yaitu /login dari yg awalnya localhost:8000 jadi localhost:8000/login , pastikan sudah ambil data seeder
11. Setelah itu masuk dengan email : admin@gmail.com dan password : admin123
12. di admin, silahkan untuk tambah barang
13. setelah tambah barang, coba lah untuk register sebagai pelanggan dan coba untuk memesan beberapa produk.
14. Coba edit profile dulu untuk alamat yang otomatis masuk ke checkout tanpa perlu untuk mengetikan manual, jika belum update alamat maka sistem yang default cuma isi no Hp sama alamat saja
    
