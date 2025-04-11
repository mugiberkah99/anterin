
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-orange-600">GASIN - Laper? GASIN Aja!</h1>
        <p className="text-gray-500">Makanan cepat, murah, dan lokal!</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="shadow-lg">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">🍔 Pesan Makanan</h2>
            <Input placeholder="Cari makanan atau resto..." className="mb-2" />
            <Button className="w-full">Cari</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">📦 Lacak Pesanan</h2>
            <Input placeholder="Masukkan ID Pesanan" className="mb-2" />
            <Button className="w-full">Lacak</Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">👑 GASIN VIP</h2>
            <p className="mb-2 text-sm text-gray-600">Langganan gratis ongkir + menu eksklusif!</p>
            <Button className="w-full">Gabung VIP</Button>
          </CardContent>
        </Card>
      </div>

      {!isLoggedIn && (
        <Card className="max-w-md mx-auto shadow-lg mb-6">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">🔐 Login / Register</h2>
            <Input placeholder="Email" className="mb-2" />
            <Input type="password" placeholder="Password" className="mb-2" />
            <Button className="w-full mb-2" onClick={() => setIsLoggedIn(true)}>Login</Button>
            <Button variant="outline" className="w-full">Register</Button>
          </CardContent>
        </Card>
      )}

      {isLoggedIn && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="shadow-lg">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">🏪 Daftar Restoran</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Ayam Geprek Sambel Gila</li>
                <li>Nasi Goreng Gila Abiezz</li>
                <li>Bakso Malang Mantap</li>
                <li>Warung Vegan Lokal</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">🧾 Checkout & Pembayaran</h2>
              <p className="text-sm text-gray-600 mb-2">Total: Rp42.000</p>
              <Button className="w-full mb-2">Bayar dengan E-Wallet</Button>
              <Button variant="outline" className="w-full">Bayar dengan QRIS</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg md:col-span-2">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">🗺️ Tracking Pesanan (Live Map)</h2>
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                Map (Google Maps API Placeholder)
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="text-center mt-10 text-gray-400 text-sm">
        &copy; 2025 GASIN App. Made with 🍜
      </footer>
    </div>
  );
}
