# Website Messaging Architecture - MIU SQUARE

Cap nhat: 2026-03-26
Nguoi soan: CMO
Issue nguon: ANG-53

## 1. Muc tieu tai lieu

Tai lieu nay khoa copy architecture cho website MIU SQUARE theo huong da trang da duoc chot trong `ANG-50`. Muc tieu la de UI Designer va CTO co the dua thang vao route shell va component ma khong can suy dien them.

Tai lieu nay uu tien 3 nhom gia tri xuyen suot:

- Livestream va van hanh noi dung ban hang
- Cho thue mat bang/KOL room/khong gian kich hoat
- Event, activation va promo campaign

## 2. Nguyen tac thong diep xuyen suot

- MIU SQUARE khong duoc viet nhu mot website "gioi thieu chung chung".
- Moi trang phai cho thay MIU SQUARE la mot to hop giai phap giup thuong hieu ban hang, livestream, kich hoat diem den va tao ly do de khach quay lai.
- CTA xuyen suot uu tien `Nhan tu van giai phap` va `Dat lich tham quan MIU SQUARE`.
- Copy nao lien quan den so lieu hieu qua, suc chua, case study cu the hien chua co xac thuc thi de o trang thai placeholder tam.

## 3. He thong CTA chot

| Loai | Copy | Trang thai | Ghi chu |
|------|------|------------|---------|
| CTA chinh | `Nhan tu van giai phap` | Khoa | Dung cho Home, Dich vu, Tin tuc, Lien he |
| CTA chinh thay the | `Dat lich tham quan MIU SQUARE` | Khoa | Dung cho Ve MIU SQUARE, Khu MIU SQUARE |
| CTA phu | `Xem dich vu phu hop` | Khoa | Dieu huong ve `/dich-vu` |
| CTA phu | `Xem khong gian MIU SQUARE` | Khoa | Dieu huong ve `/khu-miu-square` |
| CTA form | `Gui nhu cau tu van` | Khoa | Dung cho form chinh |
| CTA placeholder | `Xem bang gia chi tiet` | Placeholder tam | Chi hien thi khi co bang gia/offer thuc te |

## 4. Copy architecture theo route

### 4.1 Trang chu `/`

Muc tieu: dinh vi nhanh MIU SQUARE la diem giao giua livestream, khong gian va chien dich thuong mai.

- Eyebrow: `Livestream - khong gian - activation`
  Trang thai: Khoa
- Headline: `Bien MIU SQUARE thanh diem cham giup thuong hieu livestream, kich hoat va ban hang ro rang hon`
  Trang thai: Khoa
- Subcopy: `MIU SQUARE dong hanh cung brand va local business trong van hanh livestream, cho thue khong gian va trien khai event/promo de thu hut khach, tao noi dung va chot hanh dong tai diem den.`
  Trang thai: Khoa
- CTA chinh: `Nhan tu van giai phap`
  Trang thai: Khoa
- CTA phu: `Xem dich vu phu hop`
  Trang thai: Khoa
- Proof strip:
  - `Co khong gian de livestream, activation va tiep don khach`
  - `Co goi dich vu linh hoat cho campaign ngan han hoac van hanh dinh ky`
  - `Toi uu de team kinh doanh va marketing phoi hop nhanh`
  Trang thai: Khoa

### 4.2 Trang `/ve-miu-square`

Muc tieu: giai thich MIU SQUARE la ai, dang phuc vu ai, va vi sao mo hinh nay khac biet.

- Headline: `MIU SQUARE la doi tac van hanh khong gian va chien dich de thuong hieu hien dien dung luc`
  Trang thai: Khoa
- Subcopy: `Chung toi xay dung MIU SQUARE nhu mot diem den de ket noi livestream, mat bang trien khai va cac hoat dong activation thuc chien, giup doi tac ra mat campaign gon hon va de phoi hop hon.`
  Trang thai: Khoa
- CTA chinh: `Dat lich tham quan MIU SQUARE`
  Trang thai: Khoa
- CTA phu: `Xem khong gian MIU SQUARE`
  Trang thai: Khoa
- Doan dinh vi ngan:
  - `Khong chi cho thue dia diem, MIU SQUARE tap trung vao kha nang van hanh duoc`
  - `Khong chi lam su kien, MIU SQUARE huong den hieu qua thuong mai va trai nghiem thuong hieu`
  Trang thai: Khoa
- Block "Tam nhin / Su menh / Gia tri cot loi"
  Trang thai: Placeholder tam
  Ghi chu: can board xac nhan ngon ngu thuong hieu cap cong ty neu muon dua len trang.

### 4.3 Trang `/khu-miu-square`

Muc tieu: ban khong gian va cac khu vuc theo logic su dung thuc te.

- Headline: `Kham pha cac khu vuc duoc thiet ke cho livestream, tiep don va kich hoat tai cho`
  Trang thai: Khoa
- Subcopy: `Moi khu trong MIU SQUARE duoc sap theo nhu cau van hanh khac nhau, tu livestream ban hang, quay/chup asset, tiep khach den khong gian event mini va promo activation.`
  Trang thai: Khoa
- CTA chinh: `Dat lich tham quan MIU SQUARE`
  Trang thai: Khoa
- CTA phu: `Nhan tu van giai phap`
  Trang thai: Khoa
- Nhom card de xuat:
  - `Khu livestream`: `Cho setup buoi live, demo san pham va san xuat noi dung ban hang`
    Trang thai: Khoa
  - `Khu tiep don`: `Phu hop don doi tac, khach tham quan va lam viec nhanh truoc campaign`
    Trang thai: Khoa
  - `Khu event/promo`: `Dung cho mini event, activation va trung bay theo chu de`
    Trang thai: Khoa
  - `Khu linh hoat`: `Placeholder cho ten khu vuc cu the khi board chot mat bang that`
    Trang thai: Placeholder tam

### 4.4 Trang `/dich-vu`

Muc tieu: day trang nay thanh conversion page chinh.

- Headline: `Dich vu tai MIU SQUARE duoc thiet ke de thuong hieu co noi dung, co diem den va co chien dich ro rang`
  Trang thai: Khoa
- Subcopy: `Tu livestream ban hang, cho thue mat bang den event/promo campaign, MIU SQUARE giup doi tac chon dung goi dich vu theo muc tieu truyen thong va ban hang hien tai.`
  Trang thai: Khoa
- CTA chinh: `Nhan tu van giai phap`
  Trang thai: Khoa
- CTA phu: `Dat lich tham quan MIU SQUARE`
  Trang thai: Khoa
- Nhom dich vu chinh:
  - `Livestream va san xuat noi dung`: `Ho tro setup khong gian, nhiep do van hanh va boi canh phu hop cho buoi live`
    Trang thai: Khoa
  - `Cho thue mat bang linh hoat`: `Dap ung nhu cau dung dia diem theo khung gio, theo su kien hoac theo campaign`
    Trang thai: Khoa
  - `Event va promo activation`: `Phu hop cho khai truong, launch nho, campaign kich hoat tai diem den va ket noi khach hang`
    Trang thai: Khoa
  - `Combo dich vu theo chien dich`: `Placeholder cho cac goi ket hop va pricing/SLA cu the`
    Trang thai: Placeholder tam
- Form intro:
  - Heading: `Gui nhu cau de MIU SQUARE de xuat cau hinh phu hop`
    Trang thai: Khoa
  - Support copy: `De lai muc tieu campaign, hinh thuc trien khai va thoi diem du kien. Doi ngu se lien he de tu van kich ban phu hop.`
    Trang thai: Khoa

### 4.5 Trang `/tin-tuc`

Muc tieu: tao lop noi dung de nuoi tin tuong va ho tro SEO/co social update, khong gia vo co newsroom day du.

- Headline: `Cap nhat hoat dong, campaign va goc nhin van hanh tu MIU SQUARE`
  Trang thai: Khoa
- Subcopy: `Trang tin tuc la noi MIU SQUARE chia se cac case activation, lich su kien, goc nhin livestream va cac cap nhat moi de doi tac theo doi nhanh.`
  Trang thai: Khoa
- CTA chinh: `Nhan tu van giai phap`
  Trang thai: Khoa
- CTA phu: `Xem dich vu phu hop`
  Trang thai: Khoa
- Listing state:
  - `Bai viet noi bat`
    Trang thai: Placeholder tam
  - `Lich su kien sap toi`
    Trang thai: Placeholder tam
  - `Case study / recap campaign`
    Trang thai: Placeholder tam
  Ghi chu: khi chua co bai that, UI nen dung card mau co nhan "Sap cap nhat".

### 4.6 Trang `/lien-he`

Muc tieu: cho nguoi dung mot duong lien he ro rang, it ma sat.

- Headline: `Lien he MIU SQUARE de chot hinh thuc hop tac phu hop voi muc tieu cua ban`
  Trang thai: Khoa
- Subcopy: `Neu ban dang can khong gian livestream, dia diem cho campaign hay mot buoi activation gon va nhanh, hay gui nhu cau de doi ngu MIU SQUARE tu van cach trien khai phu hop.`
  Trang thai: Khoa
- CTA chinh tren form: `Gui nhu cau tu van`
  Trang thai: Khoa
- CTA phu: `Dat lich tham quan MIU SQUARE`
  Trang thai: Khoa
- Thong tin lien he:
  - `Dia chi cu the`
    Trang thai: Placeholder tam
  - `So hotline`
    Trang thai: Placeholder tam
  - `Zalo / Messenger / WhatsApp`
    Trang thai: Placeholder tam
  Ghi chu: chi khoa copy label, chua khoa du lieu lien he vi board chua xac nhan.

## 5. Mapping section uu tien cho UI/CTO

| Route | Section bat buoc | Muc tieu |
|------|------------------|----------|
| `/` | Hero, proof strip, 3 tru dich vu, CTA cuoi | Dinh vi nhanh va dieu huong sang trang dich vu |
| `/ve-miu-square` | Hero, cau chuyen/vi the, block gia tri, CTA | Tang tin tuong va boi canh thuong hieu |
| `/khu-miu-square` | Hero, grid khu vuc, gallery shell, CTA | Ban khong gian theo tinh huong su dung |
| `/dich-vu` | Hero, nhom dich vu, form tu van, FAQ ngan | Trang chuyen doi chinh |
| `/tin-tuc` | Hero, danh sach bai viet, CTA | Noi dung ho tro trust/SEO |
| `/lien-he` | Hero, form, quick contact, map shell | Duong lien he ngan nhat |

## 6. Copy khoa vs placeholder tam

### Copy da khoa

- He thong CTA chinh/phu
- Headline va subcopy cho ca 6 route
- Ten 3 tru dich vu: livestream, cho thue mat bang, event/promo
- Huong dinh vi trang chu, trang dich vu va trang khu MIU SQUARE

### Placeholder tam

- Bang gia, goi dich vu chi tiet, SLA, nang luc van hanh co so lieu
- Ten khu vuc thuc te trong mat bang
- Dia chi, hotline, kenh lien he xac thuc
- Bai viet, lich su kien, case study, testimonial
- Phan tam nhin/su menh neu board muon dua thong diep corporate day du

## 7. Huong dan ap dung

- UI Designer khong doi wording CTA da khoa neu chua co yeu cau moi.
- CTO nen tach copy vao content layer ngay tu dau de de doi placeholder sau.
- Neu can rut gon tren mobile, uu tien giu headline, 1 subcopy ngan va CTA chinh; proof/detail co the an xuong card hoac accordion.
- Trang `Dich vu` va `Lien he` can dung cung mot vocabulary form de tracking conversion nhat quan.
