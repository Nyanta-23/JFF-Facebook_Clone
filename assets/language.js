const getTheElement = {
    // title tab
    title: document.getElementsByTagName("title")[0],

    // quote text in under facebook title
    quote: document.getElementsByClassName("quote")[0],

    // form
    form: {
        id: document.getElementById("email"),
        password: document.getElementById("password")
    },

    // login button
    login: document.getElementsByClassName("buttonColor")[0],

    // link forgot password
    forgotPass: document.getElementsByClassName("linkForgot")[0],

    // button to create new accounts
    createAccount: document.getElementsByClassName("create")[0],

    // text within an anchor elemen to new create page
    textCreatePage: {
        // examp maybe textIn: document.getElementsByClassName("text-createpage")[0],
        createPage: document.getElementsByClassName("createPage")[0],
        text: document.getElementsByClassName("text")[0]
    },

    // fiture list on footer
    listFiture: {
        classListFiture: document.getElementsByClassName("listFiture")[0],
        listFitureTags: document.getElementsByClassName("listFiture")[0].getElementsByTagName("a")
    }
};

const listFiture = getTheElement.listFiture.listFitureTags;


function indonesian() {
    getTheElement.createAccount.style.fontSize = "20px";

    // title tab
    getTheElement.title.innerText = "Facebook - Masuk atau Daftar";

    // quote
    getTheElement.quote.innerText = "Facebook membantu Anda tehubung dan berbagi dengan orang-orang dalam kehidupan Anda";

    // form
    getTheElement.form.id.placeholder = "Email atau Nomor Telepon";
    getTheElement.form.password.placeholder = "Kata Sandi";

    // button login
    getTheElement.login.innerText = "Masuk";

    // link forgot password
    getTheElement.forgotPass.innerText = "Lupa Kata Sandi?";

    // button to create new accounts
    getTheElement.createAccount.innerText = "Buat Akun Baru";

    // text within an anchor elemen to new create page
    getTheElement.textCreatePage.createPage.innerText = "Buat Halaman";
    getTheElement.textCreatePage.text.innerText = "untuk selebriti, merek, atau bisnis";

    // list fiture in footer
    listFiture[0].innerText = "Daftar";
    listFiture[1].innerText = "Masuk";
    listFiture[2].innerText = "Messenger";
    listFiture[3].innerText = "Facebook Lite";
    listFiture[4].innerText = "Watch";
    listFiture[5].innerText = "Tempat";
    listFiture[6].innerText = "Game";
    listFiture[7].innerText = "Marketplace";
    listFiture[8].innerText = "Facebook Pay";
    listFiture[9].innerText = "Oculus";
    listFiture[10].innerText = "Portal";
    listFiture[11].innerText = "Instagram";
    listFiture[12].innerText = "Bulltetin";
    listFiture[13].innerText = "Lokal";
    listFiture[14].innerText = "Penggalangan Dana";
    listFiture[15].innerText = "Layanan";
    listFiture[16].innerText = "Pusat Informasi Pemilu";
    listFiture[17].innerText = "Group";
    listFiture[18].innerText = "Tentang";
    listFiture[19].innerText = "Buat Iklan";
    listFiture[20].innerText = "Buat Halaman";
    listFiture[21].innerText = "Developer";
    listFiture[22].innerText = "Karier";
    listFiture[23].innerText = "Privasi";
    listFiture[24].innerText = "Cookie";
    listFiture[25].innerText = "Pilihan Iklan";
    listFiture[26].innerText = "Ketentuan";
    listFiture[27].innerText = "Bantuan";
    listFiture[28].innerText = "Penggunaan Kontak & Non-Pengguna";

}


function english() {
    getTheElement.createAccount.style.fontSize = "18px";

    // title tab
    getTheElement.title.innerText = "Facebook - log in or sign up";

    // quote
    getTheElement.quote.innerText = "Facebook helps you connect and share with the people in your life.";

    // form
    getTheElement.form.id.placeholder = "Email address or phone number";
    getTheElement.form.password.placeholder = "Password";

    // button login
    getTheElement.login.innerText = "Log In";

    // link forgot password
    getTheElement.forgotPass.innerText = "Forgotten password?";

    // button to create new accounts
    getTheElement.createAccount.innerText = "Create New Account";


    // text within an anchor elemen to new create page
    getTheElement.textCreatePage.createPage.innerText = "Create Page";
    getTheElement.textCreatePage.text.innerText = "for celebrity, brand, or business";

    // list fiture in footer
    listFiture[0].innerText = "Sign Up";
    listFiture[1].innerText = "Log In";
    listFiture[2].innerText = "Mesenger";
    listFiture[3].innerText = "Facebook Lite";
    listFiture[4].innerText = "Watch";
    listFiture[5].innerText = "Places";
    listFiture[6].innerText = "Games";
    listFiture[7].innerText = "Marketplace";
    listFiture[8].innerText = "Facebook Pay";
    listFiture[9].innerText = "Oculus";
    listFiture[10].innerText = "Portal";
    listFiture[11].innerText = "Instagram";
    listFiture[12].innerText = "Bulltetin";
    listFiture[13].innerText = "Local";
    listFiture[14].innerText = "Fundraisers";
    listFiture[15].innerText = "Services";
    listFiture[16].innerText = "Voting Information Centre";
    listFiture[17].innerText = "Groups";
    listFiture[18].innerText = "About";
    listFiture[19].innerText = "Create ad";
    listFiture[20].innerText = "Create Page";
    listFiture[21].innerText = "Developers";
    listFiture[22].innerText = "Careers";
    listFiture[23].innerText = "Privacy";
    listFiture[24].innerText = "Cookies";
    listFiture[25].innerText = "AdChoiches";
    listFiture[26].innerText = "Terms";
    listFiture[27].innerText = "Help";
    listFiture[28].innerText = "Contact uploading and non-users";
};


function basaJawa() {
    getTheElement.createAccount.style.fontSize = "18px";

    // title tab
    getTheElement.title.innerText = "Facebook - Mlebu utawa Dhaptar";

    // quote
    getTheElement.quote.innerText = "Facebook ngewangi sampeyan sinambung lan andum karo wong ing sajeroning urip sampeyan.";

    // form
    getTheElement.form.id.placeholder = "Email utawa Nomer Hape";
    getTheElement.form.password.placeholder = "Sandi";

    // button login
    getTheElement.login.innerText = "Mlebu";

    // link forgot password
    getTheElement.forgotPass.innerText = "Lali tembung sandi?";

    // button to create new accounts
    getTheElement.createAccount.innerText = "Nggawe Akun Anyar";

    // text within an anchor elemen to new create page
    getTheElement.textCreatePage.createPage.innerText = "Nggawe Kaca";
    getTheElement.textCreatePage.text.innerText = "untuk selebriti, merek, atau bisnis";

    // list fiture in footer
    listFiture[0].innerText = "Ndaptar";
    listFiture[1].innerText = "Mlebu";
    listFiture[2].innerText = "Messenger";
    listFiture[3].innerText = "Facebook Lite";
    listFiture[4].innerText = "Watch";
    listFiture[5].innerText = "Panggonan";
    listFiture[6].innerText = "Dolanan";
    listFiture[7].innerText = "Marketplace";
    listFiture[8].innerText = "Facebook Pay";
    listFiture[9].innerText = "Oculus";
    listFiture[10].innerText = "Portal";
    listFiture[11].innerText = "Instagram";
    listFiture[12].innerText = "Bulltetin";
    listFiture[13].innerText = "Lokal";
    listFiture[14].innerText = "Penggalangan Dhana";
    listFiture[15].innerText = "Layanan";
    listFiture[16].innerText = "Pusat Informasi Pemilu";
    listFiture[17].innerText = "Paaguyuban";
    listFiture[18].innerText = "Babagan";
    listFiture[19].innerText = "Gawe Iklan";
    listFiture[20].innerText = "Nggawe Kaca";
    listFiture[21].innerText = "Pangembang";
    listFiture[22].innerText = "Karier";
    listFiture[23].innerText = "Privasi";
    listFiture[24].innerText = "Kuki";
    listFiture[25].innerText = "Pilihan Iklan";
    listFiture[26].innerText = "Katemtuan";
    listFiture[27].innerText = "Bantuan";
    listFiture[28].innerText = "Penguggahan Kontak & Non-Pengguna";

}

function BahasaMelayu() {
    // title tab
    getTheElement.title.innerText = "Facebook - Log masuk atau daftar";

    // quote
    getTheElement.quote.innerText = "Facebook membantu anda untuk berhubung dan berkongsi dengan orang dalam hidup anda.";

    // form
    getTheElement.form.id.placeholder = "E-mel atau Nombor Telefon";
    getTheElement.form.password.placeholder = "Kata Laluan";

    // button login
    getTheElement.login.innerText = "Log Masuk";

    // link forgot password
    getTheElement.forgotPass.innerText = "Terlupa Kata laluan";

    // button to create new accounts
    getTheElement.createAccount.innerText = "Cipta Akaun Baru";

    // text within an anchor elemen to new create page
    getTheElement.textCreatePage.createPage.innerText = "Cipta Halaman";
    getTheElement.textCreatePage.text.innerText = "untuk selebriti, jenama, atau perniagaan.";

    // list fiture in footer
    listFiture[0].innerText = "Daftar";
    listFiture[1].innerText = "Log Masuk";
    listFiture[2].innerText = "Messenger";
    listFiture[3].innerText = "Facebook Lite";
    listFiture[4].innerText = "Watch";
    listFiture[5].innerText = "Tempat";
    listFiture[6].innerText = "Permainan";
    listFiture[7].innerText = "Marketplace";
    listFiture[8].innerText = "Facebook Pay";
    listFiture[9].innerText = "Oculus";
    listFiture[10].innerText = "Portal";
    listFiture[11].innerText = "Instagram";
    listFiture[12].innerText = "Bulltetin";
    listFiture[13].innerText = "Tempatan";
    listFiture[14].innerText = "Pengumpulan Dana";
    listFiture[15].innerText = "Perkhidmatan";
    listFiture[16].innerText = "Pusat Maklumat Pengundian";
    listFiture[17].innerText = "Kumpulan";
    listFiture[18].innerText = "Perihal";
    listFiture[19].innerText = "Cipta Iklan";
    listFiture[20].innerText = "Cipta Halaman";
    listFiture[21].innerText = "Pembangun";
    listFiture[22].innerText = "Kerjaya";
    listFiture[23].innerText = "Privasi";
    listFiture[24].innerText = "Kuki";
    listFiture[25].innerText = "Pilihan Iklan";
    listFiture[26].innerText = "Terma";
    listFiture[27].innerText = "Bantuan";
    listFiture[28].innerText = "Muat Naik Kenalan & Bukan Pengguna";
}

function nihongo() {

    // title tab
    getTheElement.title.innerText = "Facebook - ログインまたは登録";

    // quote
    getTheElement.quote.innerText = "Facebookを使うと、友達や同僚、同級生、仲間たちとつながりを深められます。ケータイ、スマートフォンからもアクセスできます。";

    // form
    getTheElement.form.id.placeholder = "メールアドレスまたは電話番号";
    getTheElement.form.password.placeholder = "パスワード";

    // button login
    getTheElement.login.innerText = "ログイン";

    // link forgot password
    getTheElement.forgotPass.innerText = "パスワードを忘れた場合";

    // button to create new accounts
    getTheElement.createAccount.innerText = "新しいアカウントを作成";

    // text within an anchor elemen to new create page
    getTheElement.textCreatePage.createPage.innerText = "Facebookページを作成";
    getTheElement.textCreatePage.text.innerText = "有名人、ブランドまたはビジネスのためにできます。";

    // list fiture in footer
    listFiture[0].innerText = "できます。";
    listFiture[1].innerText = "ログイン";
    listFiture[2].innerText = "Messenger";
    listFiture[3].innerText = "Facebook Lite";
    listFiture[4].innerText = "Watch";
    listFiture[5].innerText = "スポット";
    listFiture[6].innerText = "ゲーム";
    listFiture[7].innerText = "Marketplace";
    listFiture[8].innerText = "Facebook Pay";
    listFiture[9].innerText = "Oculus";
    listFiture[10].innerText = "Portal";
    listFiture[11].innerText = "Instagram";
    listFiture[12].innerText = "Bulltetin";
    listFiture[13].innerText = "ゲーム";
    listFiture[14].innerText = "募金キャンペーン";
    listFiture[15].innerText = "サービス";
    listFiture[16].innerText = "投票情報センター";
    listFiture[17].innerText = "グループ";
    listFiture[18].innerText = "Facebookについて";
    listFiture[19].innerText = "広告を作成";
    listFiture[20].innerText = "ページを作成";
    listFiture[21].innerText = "開発者";
    listFiture[22].innerText = "採用情報";
    listFiture[23].innerText = "プライバシー";
    listFiture[24].innerText = "Cookie";
    listFiture[25].innerText = "AdChoices";
    listFiture[26].innerText = "規約";
    listFiture[27].innerText = "ヘルプ";
    listFiture[28].innerText = "連絡先のアップロードと非ユーザー";
}



function france() {
    // title tab
    getTheElement.title.innerText = "Facebook - Connexion ou inscription";

    // quote
    getTheElement.quote.innerText = "Avec Facebook, partagez et restez en contact avec votre entourage.";

    // form
    getTheElement.form.id.placeholder = "Adresse e-mail ou numéro de tél.";
    getTheElement.form.password.placeholder = "Mot de passe";

    // button login
    getTheElement.login.innerText = "Se connecter";

    // link forgot password
    getTheElement.forgotPass.innerText = "Mot de passe oublié ?";

    // button to create new accounts
    getTheElement.createAccount.innerText = "Créer nouveau compte";

    // text within an anchor elemen to new create page
    getTheElement.textCreatePage.createPage.innerText = "Créer une Page";
    getTheElement.textCreatePage.text.innerText = "pour une célébrité, une marque ou une entreprise.";

    // list fiture in footer
    listFiture[0].innerText = "S’inscrire";
    listFiture[1].innerText = "Se connecter";
    listFiture[2].innerText = "Messenger";
    listFiture[3].innerText = "Facebook Lite";
    listFiture[4].innerText = "Watch";
    listFiture[5].innerText = "Lieux";
    listFiture[6].innerText = "Jeux";
    listFiture[7].innerText = "Marketplace";
    listFiture[8].innerText = "Facebook Pay";
    listFiture[9].innerText = "Oculus";
    listFiture[10].innerText = "Portal";
    listFiture[11].innerText = "Instagram";
    listFiture[12].innerText = "Bulltetin";
    listFiture[13].innerText = "Local";
    listFiture[14].innerText = "Collectes de dons";
    listFiture[15].innerText = "Services";
    listFiture[16].innerText = "Centre d’information sur les élections";
    listFiture[17].innerText = "Groupes";
    listFiture[18].innerText = "À propos";
    listFiture[19].innerText = "Créer une publicité";
    listFiture[20].innerText = "Créer une Page";
    listFiture[21].innerText = "Développeurs";
    listFiture[22].innerText = "Emplois";
    listFiture[23].innerText = "Confidentialité";
    listFiture[24].innerText = "Cookies";
    listFiture[25].innerText = "Choisir sa pub";
    listFiture[26].innerText = "Conditions générales";
    listFiture[27].innerText = "Aide";
    listFiture[28].innerText = "Importation des contacts et non-utilisateursParamètres";
}


function spainsh() {

    // title tab
    getTheElement.title.innerText = "Facebook - Inicia sesión o regístrate";

    // quote
    getTheElement.quote.innerText = "Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.";

    // form
    getTheElement.form.id.placeholder = "Correo electrónico o número de teléfono";
    getTheElement.form.password.placeholder = "Contraseña";

    // button login
    getTheElement.login.innerText = "Iniciar sesión";

    // link forgot password
    getTheElement.forgotPass.innerText = "¿Olvidaste tu contraseña?";

    // button to create new accounts
    getTheElement.createAccount.innerText = "Crear cuenta nueva";


    // text within an anchor elemen to new create page
    getTheElement.textCreatePage.createPage.innerText = "Crea una página";
    getTheElement.textCreatePage.text.innerText = "para una celebridad, una marca o un negocio.";

    // list fiture in footer
    listFiture[0].innerText = "Registrarte";
    listFiture[1].innerText = "Iniciar sesión";
    listFiture[2].innerText = "Messenger";
    listFiture[3].innerText = "Facebook Lite";
    listFiture[4].innerText = "Watch";
    listFiture[5].innerText = "Lugares";
    listFiture[6].innerText = "Juegos";
    listFiture[7].innerText = "Marketplace";
    listFiture[8].innerText = "Facebook Pay";
    listFiture[9].innerText = "Oculus";
    listFiture[10].innerText = "Portal";
    listFiture[11].innerText = "Instagram";
    listFiture[12].innerText = "Bulltetin";
    listFiture[13].innerText = "Local";
    listFiture[14].innerText = "Recaudaciones de fondos";
    listFiture[15].innerText = "Servicios";
    listFiture[16].innerText = "Centro de información de votación";
    listFiture[17].innerText = "Grupous";
    listFiture[18].innerText = "Información";
    listFiture[19].innerText = "Crear anuncio";
    listFiture[20].innerText = "Crear página";
    listFiture[21].innerText = "Desarrolladores";
    listFiture[22].innerText = "Empleo";
    listFiture[23].innerText = "Privacidad";
    listFiture[24].innerText = "Cookies";
    listFiture[25].innerText = "Opciones de anuncios";
    listFiture[26].innerText = "Condiciones";
    listFiture[27].innerText = "Ayuda";
    listFiture[28].innerText = "Subir contactos y no usuarios";
}

function portugies() {

    // title tab
    getTheElement.title.innerText = "Facebook – entre ou cadastre-se";

    // quote
    getTheElement.quote.innerText = "O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.";

    // form
    getTheElement.form.id.placeholder = "Email ou telefone";
    getTheElement.form.password.placeholder = "Senha";

    // button login
    getTheElement.login.innerText = "Entrar";

    // link forgot password
    getTheElement.forgotPass.innerText = "Esqueceu a senha?";

    // button to create new accounts
    getTheElement.createAccount.innerText = "Criar nova conta";


    // text within an anchor elemen to new create page
    getTheElement.textCreatePage.createPage.innerText = "Criar uma Página";
    getTheElement.textCreatePage.text.innerText = "para uma celebridade, uma marca ou uma empresa.";

    // list fiture in footer
    listFiture[0].innerText = "Cadastre-se";
    listFiture[1].innerText = "Entrar";
    listFiture[2].innerText = "Mesenger";
    listFiture[3].innerText = "Facebook Lite";
    listFiture[4].innerText = "Watch";
    listFiture[5].innerText = "Locais";
    listFiture[6].innerText = "Jogos";
    listFiture[7].innerText = "Marketplace";
    listFiture[8].innerText = "Facebook Pay";
    listFiture[9].innerText = "Oculus";
    listFiture[10].innerText = "Portal";
    listFiture[11].innerText = "Instagram";
    listFiture[12].innerText = "Boletim";
    listFiture[13].innerText = "Local";
    listFiture[14].innerText = "Campanhas de arrecadação de fundos";
    listFiture[15].innerText = "Serviços";
    listFiture[16].innerText = "Central de Informações de Votação";
    listFiture[17].innerText = "Grupos";
    listFiture[18].innerText = "Sobre";
    listFiture[19].innerText = "Criar anúncio";
    listFiture[20].innerText = "Criar Página";
    listFiture[21].innerText = "Desenvolvedores";
    listFiture[22].innerText = "Carreiras";
    listFiture[23].innerText = "Privacidade";
    listFiture[24].innerText = "Cookies";
    listFiture[25].innerText = "Escolhas para anúncios";
    listFiture[26].innerText = "Termos";
    listFiture[27].innerText = "Ajuda";
    listFiture[28].innerText = "Carregamento de contatos e não usuáriosConfiguraçõesRegistro de Atividades";
}



function deutsch() {
    // title tab
    getTheElement.title.innerText = "Facebook – Anmelden oder Registrieren";

    // quote
    getTheElement.quote.innerText = "Auf Facebook bleibst du mit Menschen in Verbindung und teilst Fotos, Videos und vieles mehr mit ihnen.";

    // form
    getTheElement.form.id.placeholder = "E-Mail-Adresse oder Telefonnummer";
    getTheElement.form.password.placeholder = "Passwort";

    // button login
    getTheElement.login.innerText = "Anmelden";

    // link forgot password
    getTheElement.forgotPass.innerText = "Passwort vergessen?";

    // button to create new accounts
    getTheElement.createAccount.innerText = "Neues Konto erstellen";


    // text within an anchor elemen to new create page
    getTheElement.textCreatePage.createPage.innerText = "Erstelle eine Seite";
    getTheElement.textCreatePage.text.innerText = "für einen Star, eine Marke oder ein Unternehmen.";

    // list fiture in footer
    listFiture[0].innerText = "Registrieren";
    listFiture[1].innerText = "Anmelden";
    listFiture[2].innerText = "Messenger";
    listFiture[3].innerText = "Facebook Lite";
    listFiture[4].innerText = "Watch";
    listFiture[5].innerText = "Orte";
    listFiture[6].innerText = "Spiele";
    listFiture[7].innerText = "Marketplace";
    listFiture[8].innerText = "Facebook Pay";
    listFiture[9].innerText = "Oculus";
    listFiture[10].innerText = "Portal";
    listFiture[11].innerText = "Instagram";
    listFiture[12].innerText = "Bulltetin";
    listFiture[13].innerText = "Lokales";
    listFiture[14].innerText = "Spendenaktionen";
    listFiture[15].innerText = "Services";
    listFiture[16].innerText = "Wahl-Informationszentrum";
    listFiture[17].innerText = "Gruppen";
    listFiture[18].innerText = "Info";
    listFiture[19].innerText = "Werbeanzeige erstellen";
    listFiture[20].innerText = "Seite erstellen";
    listFiture[21].innerText = "Entwickler";
    listFiture[22].innerText = "Karriere";
    listFiture[23].innerText = "Privatsphäre";
    listFiture[24].innerText = "Cookies";
    listFiture[25].innerText = "Werbepräferenzen";
    listFiture[26].innerText = "Nutzungsbedingungen";
    listFiture[27].innerText = "Hilfe";
    listFiture[28].innerText = "Hochladen von Kontakten und Nicht-Nutzer";
}