# Local placeholder image generator (NO network use).
# Creates clearly-labeled stand-ins at the exact paths components expect,
# so layout/UX can be finished and QA'd before official photos arrive.
# Re-run after placing real photos is unnecessary — just overwrite the files.
# Usage: powershell -ExecutionPolicy Bypass -File scripts/make-placeholders.ps1
Add-Type -AssemblyName System.Drawing

function Save-Jpeg($bmp, $path, $quality = 82) {
  $codec = [Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $enc = New-Object Drawing.Imaging.EncoderParameters 1
  $enc.Param[0] = New-Object Drawing.Imaging.EncoderParameter ([Drawing.Imaging.Encoder]::Quality, $quality)
  $bmp.Save($path, $codec, $enc)
  $bmp.Dispose()
}

function New-LabeledPhoto($path, $w, $h, $big, $small) {
  $dir = Split-Path $path
  New-Item -ItemType Directory -Force $dir | Out-Null
  $bmp = New-Object Drawing.Bitmap $w, $h
  $g = [Drawing.Graphics]::FromImage($bmp)
  $g.Clear([Drawing.ColorTranslator]::FromHtml('#DCE5F2'))
  $navy = [Drawing.ColorTranslator]::FromHtml('#0A1F3C')
  $gold = [Drawing.ColorTranslator]::FromHtml('#C9A227')
  $m = [Math]::Max(10, $w / 40)
  $pen = New-Object Drawing.Pen $gold, ([Math]::Max(3, $w / 250))
  $g.DrawRectangle($pen, $m, $m, $w - 2 * $m, $h - 2 * $m)
  $sf = New-Object Drawing.StringFormat
  $sf.Alignment = 'Center'; $sf.LineAlignment = 'Center'
  $brush = New-Object Drawing.SolidBrush $navy
  try {
    $bigFont = New-Object Drawing.Font 'Georgia', ($w / 7), ([Drawing.FontStyle]::Bold)
  } catch {
    $bigFont = New-Object Drawing.Font 'Arial', ($w / 7), ([Drawing.FontStyle]::Bold)
  }
  $smallFont = New-Object Drawing.Font 'Arial', ([Math]::Max(14, $w / 42))
  $g.DrawString($big, $bigFont, $brush, (New-Object Drawing.RectangleF 0, 0, $w, ($h * 0.52)), $sf)
  $g.DrawString($small, $smallFont, $brush, (New-Object Drawing.RectangleF 0, ($h * 0.42), $w, ($h * 0.5)), $sf)
  $g.Dispose()
  Save-Jpeg $bmp $path
  Write-Output "made $path"
}

# Hero / campus photos (4:3)
$heroes = @('background1.jpg','background2.jpg','background3.jpg','background4.jpg','background5.jpg','background6.jpeg','background7.jpg','background8.jpg','background9.jpg','background10.jpg')
foreach ($b in $heroes) {
  New-LabeledPhoto "public/images/hero/$b" 1200 900 'Ақбөбек' ("кампус · " + $b)
}

# Director portraits (3:4) — placeholders; official photos replace these files.
New-LabeledPhoto 'public/director/director-1.jpg' 800 1067 'БД' 'директор · director-1.jpg'
New-LabeledPhoto 'public/director/director-2.jpg' 800 1067 'БД · 2' 'директор · director-2.jpg'
New-LabeledPhoto 'public/director/director-3.jpg' 800 1067 'БД · 3' 'директор · director-3.jpg'

# Teacher portraits (3:4) with initials
$teachers = @{
  kaiyrkulov_n='ҚН'; karayeva_a='ҚА'; baidirahmanova_b='ББ'; dushmanova_a='ДА';
  karabai_a='ҚА'; amangazy_s='АС'; zholaman_m='ЖМ'; esalina_a='ЕА';
  kopzhasarova_t='КТ'; maratkyzy_d='МД'; nazhmadinov_m='НМ'; suleimanov_b='СБ';
  akhmetova_i='АИ'; baktygulov_a='БА'; akyrap_a='АА'; dauletbaeva_s='ДС';
  sungarieva_a='СА'; zhadyrassyn_y='ЖЕ'; nazarov_d='НД'; kydyrbayeva_g='ҚГ';
  sharafadinova_a='ША'; zhomartova_a='ЖА'; tanatar_m='ТМ'; khalelova_a='ХА';
  kaiyrzhanova_a='ҚА'; utenova_k='УК'; matigulova_g='МГ'; salamatuly_a='СА'
}
foreach ($id in $teachers.Keys) {
  New-LabeledPhoto "public/images/teachers/$id.jpg" 600 800 $teachers[$id] 'фото · орнына қойылады'
}

# Brand logo placeholder: transparent PNG, dark navy artwork
# (header shows it as-is; intro + footer display it inverted for dark surfaces).
New-Item -ItemType Directory -Force 'public/brand' | Out-Null
$logo = New-Object Drawing.Bitmap 480, 180
$g = [Drawing.Graphics]::FromImage($logo)
$g.Clear([Drawing.Color]::Transparent)
$navyBrush = New-Object Drawing.SolidBrush ([Drawing.ColorTranslator]::FromHtml('#0A1F3C'))
$goldBrush = New-Object Drawing.SolidBrush ([Drawing.ColorTranslator]::FromHtml('#C9A227'))
$sf = New-Object Drawing.StringFormat
$sf.Alignment = 'Center'; $sf.LineAlignment = 'Center'
try {
  $word = New-Object Drawing.Font 'Georgia', 64, ([Drawing.FontStyle]::Bold)
} catch {
  $word = New-Object Drawing.Font 'Arial', 64, ([Drawing.FontStyle]::Bold)
}
$sub = New-Object Drawing.Font 'Arial', 22
$g.DrawString('Ақбөбек', $word, $navyBrush, (New-Object Drawing.RectangleF 0, 0, 480, 110), $sf)
$g.FillRectangle($goldBrush, 170, 116, 140, 4)
$g.DrawString('AQBOBEK LYCEUM', $sub, $navyBrush, (New-Object Drawing.RectangleF 0, 118, 480, 60), $sf)
$g.Dispose()
$logo.Save('public/brand/aqbobek-lyceum-logo.png', [Drawing.Imaging.ImageFormat]::Png)
$logo.Dispose()
Write-Output 'made public/brand/aqbobek-lyceum-logo.png'
