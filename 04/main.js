const buttons = document.querySelectorAll('.sub-header button') /** Lấy danh sách tất cả các nút button bên trong phần .sub-header để gắn sự kiện click. */

buttons.forEach((btn) => { /** Lặp qua từng nút + để xử lý sự kiện click riêng biệt cho mỗi câu hỏi.*/
    btn.addEventListener('click', () => { /**Gắn sự kiện click cho mỗi nút. Khi người dùng bấm vào dấu +, đoạn mã bên trong sẽ chạy. */
        const content = btn.nextElementSibling /** Lấy phần nội dung .sub-header-content nằm ngay sau nút bấm. Dùng nextElementSibling vì nội dung cần xổ nằm liền sau button. */

        document.querySelectorAll('.sub-header-content').forEach((el) => { /** Vòng lặp này giúp đóng hết các câu trả lời khác trước khi mở câu hiện tại (accordion chỉ mở 1 phần một lúc).*/

        
        if (el !== content) {
            el.style.maxHeight = null /**Ẩn phần nội dung (thu lại), vì CSS đã thiết lập max-height: 0 là đóng. */
            el.parentElement.classList.remove('active') /**Xóa class active trên sub-header, dùng để hỗ trợ hiệu ứng hoặc đổi màu nếu cần. */
            el.previousElementSibling.querySelector('img').src = './assets/images/icon-plus.svg' /**Đổi icon từ - về lại + cho những phần đã mở trước đó. */
        }
        })

    if (content.style.maxHeight) { /** Nếu phần hiện tại đang mở (có maxHeight), thì tiến hành đóng lại:*/
        content.style.maxHeight = null /** Thu gọn nội dung, đổi icon về +, và bỏ class active.*/
        btn.querySelector('img').src = './assets/images/icon-plus.svg'
        btn.parentElement.classList.remove('active')
    }else {
        content.style.maxHeight = content.scrollHeight + 'px' /**Ngược lại, nếu đang đóng: gán chiều cao nội dung thực tế (scrollHeight) để xổ xuống mượt mà. */
        btn.querySelector('img').src = './assets/images/icon-minus.svg'
        btn.parentElement.classList.add('active') /**Đổi dấu + thành - và thêm class active (dùng để tạo hiệu ứng highlight hoặc styling nếu cần). */
    }
    })
})
 