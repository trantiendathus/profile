const physicistsNobelPrizes = [
    { name: "Albert Einstein", date: "1921", reason: "Vì những đóng góp của ông cho vật lý lý thuyết, đặc biệt là phát hiện về hiệu ứng quang điện." },
    { name: "Niels Bohr", date: "1922", reason: "Vì nghiên cứu cấu trúc của nguyên tử và bức xạ phát ra từ chúng." },
    { name: "Marie Curie", date: "1903", reason: "Vì nghiên cứu chung của họ về hiện tượng phóng xạ." },
    // Add more physicists as needed
];

let currentIndex = 0;

function calculateAge() {
    const birthdate = parseDate(document.getElementById('birthdate').value);

    if (!birthdate || birthdate > new Date()) {
        alert('Ngày tháng năm sinh không hợp lệ hoặc trong tương lai. Vui lòng nhập ngày sinh hợp lệ.');
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById('ageResult').textContent = `Tuổi dương lịch của bạn là: ${age} năm.`;
    document.getElementById('ageResult').classList.remove('hidden');

    const zodiac = getZodiacSign(birthdate);
    document.getElementById('zodiacResult').textContent = `Cung hoàng đạo của bạn là: ${zodiac.name}.`;
    document.getElementById('zodiacResult').classList.remove('hidden');
    document.getElementById('zodiacIcon').textContent = zodiac.icon;

    // Show all boxes after calculating age
    document.querySelectorAll('.box.hidden').forEach(box => {
        box.classList.remove('hidden');
    });
}

function parseDate(input) {
    const parts = input.split('/');
    if (parts.length !== 3) return null;
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // JavaScript months are 0-based
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
}

function getZodiacSign(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return { name: "Bảo Bình", icon: "♒" };
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return { name: "Song Ngư", icon: "♓" };
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return { name: "Bạch Dương", icon: "♈" };
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return { name: "Kim Ngưu", icon: "♉" };
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return { name: "Song Tử", icon: "♊" };
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return { name: "Cự Giải", icon: "♋" };
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return { name: "Sư Tử", icon: "♌" };
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return { name: "Xử Nữ", icon: "♍" };
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return { name: "Thiên Bình", icon: "♎" };
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return { name: "Bọ Cạp", icon: "♏" };
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return { name: "Nhân Mã", icon: "♐" };
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return { name: "Ma Kết", icon: "♑" };

    return { name: "Không xác định", icon: "" };
}

function updateNobelDetails() {
    const details = document.getElementById('nobelDetails');
    const physicist = physicistsNobelPrizes[currentIndex];
    details.textContent = `${physicist.name} - ${physicist.date}: ${physicist.reason}`;
    currentIndex = (currentIndex + 1) % physicistsNobelPrizes.length;
}

function changeMusic() {
    const player = document.getElementById('musicPlayer');
    const trackName = document.getElementById('musicList').value;
    const currentTrack = document.getElementById('currentTrack');
    currentTrack.textContent = `Đang phát: ${document.querySelector(`#musicList option[value="${trackName}"]`).textContent}`;
    player.src = trackName;
}

function toggleMusic() {
    const player = document.getElementById('musicPlayer');
    const toggleButton = document.getElementById('toggleMusic');
    if (player.paused) {
        player.play();
        toggleButton.textContent = "Tắt Nhạc";
    } else {
        player.pause();
        toggleButton.textContent = "Bật Nhạc";
    }
}

function updateRealTimeClock() {
    const now = new Date();
    const clock = document.getElementById('realTimeClock');
    clock.textContent = now.toLocaleTimeString();
}

function updateCurrentDate() {
    const today = new Date();
    const dateElem = document.getElementById('currentDate');
    dateElem.textContent = today.toLocaleDateString();
}

document.addEventListener('DOMContentLoaded', () => {
    updateNobelDetails();
    setInterval(updateNobelDetails, 5000); // Update every 5 seconds

    const player = document.getElementById('musicPlayer');
    player.autoplay = true;
    player.loop = true;

    updateRealTimeClock();
    setInterval(updateRealTimeClock, 1000); // Update every second

    updateCurrentDate();
});
