# ANG-54 Backlog Checkpoints - MIU SQUARE

Ngay cap nhat: 2026-03-26
Issue nguon: ANG-54
Issue cha: ANG-50

## Muc tieu

Chuyen plan doi cau truc website MIU SQUARE thanh backlog thuc thi co checkpoint review ro rang, acceptance criteria do duoc, va dependency minh bach de board review tung chang nhanh.

## Backlog matrix

| Checkpoint | Muc tieu giao hang | Issue | Owner | Trang thai | Acceptance gate |
| --- | --- | --- | --- | --- | --- |
| 1 | Khoa visual direction, page composition, asset mapping | ANG-52 | UI Designer | In progress | Co palette, typography, hero direction, floating contact, section map cho 6 trang, va ghi ro asset placeholder/final |
| 1 | Khoa content architecture, CTA, va placeholder copy | ANG-53 | CMO | In progress | Co headline, subcopy, CTA cho 6 trang; copy placeholder duoc danh dau; thong diep nhat quan voi huong livestream + mat bang + event |
| 2 | Scaffold lai website da trang va route shell | ANG-51 | CTO | Todo | Co 6 route shell, layout chung, nav/footer, floating contact, form shell, va build/test khong do |
| 3 | Dua website len URL public cho board review | ANG-41 | CTO | Todo | Co URL public, note env/deploy, va cach redeploy de board co the review lien tuc |
| 3 | Tong hop checkpoint demo va khoa gate review cho board | ANG-56 | Product Owner | Backlog | Chi xac nhan chang demo khi ANG-51, ANG-52, ANG-53, ANG-41 da co deliverable review duoc va checklist smoke test da du |
| 4 | Bo sung editable content sau khi layout duoc duyet | ANG-55 | CTO | Backlog | Chi bat dau sau khi board duyet layout; phai chi ro field nao editable, asset nao static, va bridge du lieu nao can them |

## Thu tu dependency

1. ANG-52 va ANG-53 la dau vao de CTO scaffold dung huong, nhung CTO van co the dung placeholder de bat dau ANG-51.
2. ANG-51 phai dat route shell on dinh truoc khi ANG-41 deploy URL public co y nghia.
3. ANG-55 chi dong khi co demo review duoc tren URL public va board co checklist ro de feedback nhanh.
4. ANG-55 bi khoa sau board approval; khong dua CMS vao truoc khi layout va copy da duoc chap thuan.

## Review gate cho board

### Gate A - IA va huong giao dien

- Route map dung 6 trang da chot.
- Visual direction va copy architecture da khop voi brief moi.
- Asset placeholder da duoc danh dau ro de board biet cho nao can thay.

### Gate B - Demo public

- Co URL public truy cap duoc.
- Trang chu, nav/footer, floating contact, va form shell hoat dong tren mobile va desktop.
- CTA chinh va form tu van co tracking/co note tracking ro rang.

### Gate C - Editable content

- Board da duyet layout chang demo.
- Danh sach field editable va static brand asset da khoa.
- Scope CMS/data bridge khong mo rong qua MVP public-first.

## Ghi chu scope discipline

- Khong tach them issue moi cho visual/copy/scaffold/deploy vi da co ANG-52, ANG-53, ANG-51, ANG-41.
- Neu board doi route map hoac them tinh nang backend truoc Gate B, can mo issue scope-change rieng thay vi chen vao ANG-51.
