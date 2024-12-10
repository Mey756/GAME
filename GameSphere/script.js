const gameLinks = {
    'game1': 'https://snake-lime-five.vercel.app',
    'game2': 'https://brick-game-nu-livid.vercel.app/',
};

function startGame() {
    const playerName = document.getElementById("NamaPemain").value;
    if (playerName) {
        document.getElementById("playerName").textContent = playerName;
        document.getElementById("mainScreen").style.display = "none";
        document.getElementById("gameSelection").style.display = "block";
    } else {
        alert("Nama Pemain belum diisi!");
    }
}

function playGame(gameKey) {
    const gameFrame = document.getElementById("gameFrame");
    const gameArea = document.getElementById("gameArea");
    const dashboard = document.getElementById("dashboard");

    if (gameLinks[gameKey]) {
        console.log("Memuat game: " + gameLinks[gameKey]);
        gameFrame.src = gameLinks[gameKey];
        gameArea.style.display = "flex";
        dashboard.style.display = "none";
    } else {
        alert("Game tidak ditemukan!");
    }
}

function goBack() {
    const gameFrame = document.getElementById("gameFrame");
    const gameArea = document.getElementById("gameArea");
    const dashboard = document.getElementById("dashboard");

    gameFrame.src = "";
    gameArea.style.display = "none";
    dashboard.style.display = "block";
}

function goToDashboard() {
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("accountPage").style.display = "none";
}

function goToAccount() {
    document.getElementById("accountPage").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
}

function saveAccount() {
    const playerName = document.getElementById("playerNameInput").value;
    if (playerName) {
        document.getElementById("playerName").textContent = playerName;
        alert("Akun berhasil disimpan!");
    } else {
        alert("Nama Pemain belum diisi!");
    }
}

function clearAccount() {
    const playerNameInput = document.getElementById("playerNameInput");
    if (playerNameInput) {
        playerNameInput.value = ''; // Menghapus nilai input
        document.getElementById("playerName").textContent = 'Nama Pemain'; // Mengembalikan nama pemain ke default
        alert("Akun telah dihapus!"); // Tampilkan pesan
    } else {
        alert("Elemen input tidak ditemukan!"); // Menangani error jika input tidak ditemukan
    }
}
