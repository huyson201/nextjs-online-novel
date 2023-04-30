

export const getStringEllipsis = (desc: string, maxLength: number = 80) => {
    let trimDesc = desc.trim()
    if (trimDesc.length < maxLength) return trimDesc
    return trimDesc.slice(0, maxLength) + "..."
}

export function getTimeAgo(dateString: string) {
    const now = new Date();
    const date = new Date(dateString);
    const diff = now.getTime() - date.getTime();

    // Tính toán số ngày
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));

    if (days > 0) {
        // Nếu thời gian lớn hơn 1 ngày, trả về chuỗi dd/mm/yyyy
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;

    }

    // Nếu thời gian nhỏ hơn hoặc bằng 1 ngày, tính toán số giờ hoặc phút
    const hours = Math.floor(diff / (60 * 60 * 1000));
    const minutes = Math.floor(diff / (60 * 1000));

    if (hours > 0) {
        // Nếu thời gian lớn hơn 1 giờ, trả về chuỗi X giờ trước
        return `${hours} giờ trước`;
    } else {
        // Nếu thời gian nhỏ hơn hoặc bằng 1 giờ, trả về chuỗi X phút trước
        return `${minutes} phút trước`;
    }

}
