# Submit Tax Filing


## การติดตั้ง

1.โคลนโปรเจคต์นี้ไปยังเครื่องของคุณ:

```bash
git clone https://github.com/aekkaphonz/Tax.git
```
2.เข้าไปยัง directory ของโปรเจกต์:

```bash
cd tax
```
3.ติดตั้ง dependencies ด้วยคำสั่ง:
```bash
npm install
```
## การรันแอปพลิเคชัน
1.เริ่มต้นเซิร์ฟเวอร์ด้วยคำสั่ง:
```bash
npm run dev
```
2.เปิดเบราว์เซอร์และไปที่:

`http://localhost:5173`


## การสร้างเวอร์ชันสำหรับการผลิต
1.สร้างแอปพลิเคชันสำหรับการผลิต:
```bash
npm run build
```
2.เริ่มต้นเซิร์ฟเวอร์การผลิต:
```bash
npm start
```
## Doc
- React tutorial
[Click](https://youtu.be/4tzmynf93p8?si=KH1qEM15xiY1xz3t)
- TypeScript Full Course [Click](https://youtu.be/iJkaAJUzeWQ?si=ptwjpPR80QzZf5js)

## Sitemap
- หน้ารายละเอียดการยื่นภาษี
  - ประเภทการยื่น (Type of filing)
    - การยื่นภาษีตามปกติ (Ordinary)
      - เลือกเดือนและปี (Month & Year)
      - กรอกภาษี (Tax)
      - คำนวณภาษีมูลค่าเพิ่ม (Vat)
    - การยื่นภาษีเพิ่มเติม (Additional)
      - เลือกเดือน ปี และเวลา
      - กรอกภาษี (Tax)
      - คำนวณภาษีมูลค่าเพิ่ม (Vat)
      - ค่าธรรมเนียมเพิ่มเติม (Surcharge)
      - ค่าปรับ (Penalty)
      - จำนวนภาษีทั้งหมด
- หน้าตรวจสอบและยืนยัน
  - ประเภทการยื่น (Type of filing)
  - เดือนและปีที่ทำการยื่นเอกสาร
  - ภาษีแต่ละประเภท
  - ปุ่มยืนยัน (Confirm and Submit)

  