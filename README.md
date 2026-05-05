# Codoge — Yazılım Atölyesi

Modern, temiz bir yazılım atölyesi web sitesi.

## Dosya Yapısı

```
codoge/
├── index.html        → Anasayfa
├── hakkimizda.html   → Hakkımızda
├── isler.html        → İşler (portföy)
├── is-detay.html     → İş detay sayfası
├── iletisim.html     → İletişim
├── style.css         → Tüm stiller
├── main.js           → Etkileşimler
└── README.md
```

## GitHub Pages'te Yayınlama

1. GitHub'da yeni bir repository oluştur (ör. `codoge-site`)
2. Bu klasördeki tüm dosyaları repoya yükle
3. Repository **Settings** → **Pages** bölümüne git
4. **Source** olarak `Deploy from a branch` seç
5. **Branch**: `main` / `root` seç, **Save** tıkla
6. Birkaç dakika içinde site yayında olur:
   `https://kullaniciadi.github.io/codoge-site`

## Logo SVG'si Eklemek

`style.css` içindeki `.logo` class'ını güncelle:

```css
.logo {
  /* mevcut font bazlı logo yerine: */
}
```

HTML'deki `.logo` elementini şu şekilde değiştir:
```html
<a href="index.html" class="logo">
  <img src="logo.svg" alt="Codoge" height="32" />
</a>
```

## İçerik Güncelleme

- **İşler**: `isler.html` içindeki `.work-card` kartlarına yeni projeler ekle
- **İş detayı**: `is-detay.html` şablonunu kopyalayıp projeye özel yeniden adlandır
- **Ekip**: `hakkimizda.html` içindeki `.team-card` bölümlerini güncelle
- **İletişim**: `iletisim.html` içindeki e-posta adresini ve sosyal linkleri düzenle
