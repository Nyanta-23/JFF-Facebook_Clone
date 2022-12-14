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
    getTheElement.title.innerText = "Facebook - ???????????????????????????";

    // quote
    getTheElement.quote.innerText = "Facebook????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????";

    // form
    getTheElement.form.id.placeholder = "??????????????????????????????????????????";
    getTheElement.form.password.placeholder = "???????????????";

    // button login
    getTheElement.login.innerText = "????????????";

    // link forgot password
    getTheElement.forgotPass.innerText = "?????????????????????????????????";

    // button to create new accounts
    getTheElement.createAccount.innerText = "?????????????????????????????????";

    // text within an anchor elemen to new create page
    getTheElement.textCreatePage.createPage.innerText = "Facebook??????????????????";
    getTheElement.textCreatePage.text.innerText = "????????????????????????????????????????????????????????????????????????";

    // list fiture in footer
    listFiture[0].innerText = "???????????????";
    listFiture[1].innerText = "????????????";
    listFiture[2].innerText = "Messenger";
    listFiture[3].innerText = "Facebook Lite";
    listFiture[4].innerText = "Watch";
    listFiture[5].innerText = "????????????";
    listFiture[6].innerText = "?????????";
    listFiture[7].innerText = "Marketplace";
    listFiture[8].innerText = "Facebook Pay";
    listFiture[9].innerText = "Oculus";
    listFiture[10].innerText = "Portal";
    listFiture[11].innerText = "Instagram";
    listFiture[12].innerText = "Bulltetin";
    listFiture[13].innerText = "?????????";
    listFiture[14].innerText = "????????????????????????";
    listFiture[15].innerText = "????????????";
    listFiture[16].innerText = "????????????????????????";
    listFiture[17].innerText = "????????????";
    listFiture[18].innerText = "Facebook????????????";
    listFiture[19].innerText = "???????????????";
    listFiture[20].innerText = "??????????????????";
    listFiture[21].innerText = "?????????";
    listFiture[22].innerText = "????????????";
    listFiture[23].innerText = "??????????????????";
    listFiture[24].innerText = "Cookie";
    listFiture[25].innerText = "AdChoices";
    listFiture[26].innerText = "??????";
    listFiture[27].innerText = "?????????";
    listFiture[28].innerText = "????????????????????????????????????????????????";
}



function france() {
    // title tab
    getTheElement.title.innerText = "Facebook - Connexion ou inscription";

    // quote
    getTheElement.quote.innerText = "Avec Facebook, partagez et restez en contact avec votre entourage.";

    // form
    getTheElement.form.id.placeholder = "Adresse e-mail ou num??ro de t??l.";
    getTheElement.form.password.placeholder = "Mot de passe";

    // button login
    getTheElement.login.innerText = "Se connecter";

    // link forgot password
    getTheElement.forgotPass.innerText = "Mot de passe oubli?? ?";

    // button to create new accounts
    getTheElement.createAccount.innerText = "Cr??er nouveau compte";

    // text within an anchor elemen to new create page
    getTheElement.textCreatePage.createPage.innerText = "Cr??er une Page";
    getTheElement.textCreatePage.text.innerText = "pour une c??l??brit??, une marque ou une entreprise.";

    // list fiture in footer
    listFiture[0].innerText = "S???inscrire";
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
    listFiture[16].innerText = "Centre d???information sur les ??lections";
    listFiture[17].innerText = "Groupes";
    listFiture[18].innerText = "?? propos";
    listFiture[19].innerText = "Cr??er une publicit??";
    listFiture[20].innerText = "Cr??er une Page";
    listFiture[21].innerText = "D??veloppeurs";
    listFiture[22].innerText = "Emplois";
    listFiture[23].innerText = "Confidentialit??";
    listFiture[24].innerText = "Cookies";
    listFiture[25].innerText = "Choisir sa pub";
    listFiture[26].innerText = "Conditions g??n??rales";
    listFiture[27].innerText = "Aide";
    listFiture[28].innerText = "Importation des contacts et non-utilisateursParam??tres";
}


function spainsh() {

    // title tab
    getTheElement.title.innerText = "Facebook - Inicia sesi??n o reg??strate";

    // quote
    getTheElement.quote.innerText = "Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.";

    // form
    getTheElement.form.id.placeholder = "Correo electr??nico o n??mero de tel??fono";
    getTheElement.form.password.placeholder = "Contrase??a";

    // button login
    getTheElement.login.innerText = "Iniciar sesi??n";

    // link forgot password
    getTheElement.forgotPass.innerText = "??Olvidaste tu contrase??a?";

    // button to create new accounts
    getTheElement.createAccount.innerText = "Crear cuenta nueva";


    // text within an anchor elemen to new create page
    getTheElement.textCreatePage.createPage.innerText = "Crea una p??gina";
    getTheElement.textCreatePage.text.innerText = "para una celebridad, una marca o un negocio.";

    // list fiture in footer
    listFiture[0].innerText = "Registrarte";
    listFiture[1].innerText = "Iniciar sesi??n";
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
    listFiture[16].innerText = "Centro de informaci??n de votaci??n";
    listFiture[17].innerText = "Grupous";
    listFiture[18].innerText = "Informaci??n";
    listFiture[19].innerText = "Crear anuncio";
    listFiture[20].innerText = "Crear p??gina";
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
    getTheElement.title.innerText = "Facebook ??? entre ou cadastre-se";

    // quote
    getTheElement.quote.innerText = "O Facebook ajuda voc?? a se conectar e compartilhar com as pessoas que fazem parte da sua vida.";

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
    getTheElement.textCreatePage.createPage.innerText = "Criar uma P??gina";
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
    listFiture[14].innerText = "Campanhas de arrecada????o de fundos";
    listFiture[15].innerText = "Servi??os";
    listFiture[16].innerText = "Central de Informa????es de Vota????o";
    listFiture[17].innerText = "Grupos";
    listFiture[18].innerText = "Sobre";
    listFiture[19].innerText = "Criar an??ncio";
    listFiture[20].innerText = "Criar P??gina";
    listFiture[21].innerText = "Desenvolvedores";
    listFiture[22].innerText = "Carreiras";
    listFiture[23].innerText = "Privacidade";
    listFiture[24].innerText = "Cookies";
    listFiture[25].innerText = "Escolhas para an??ncios";
    listFiture[26].innerText = "Termos";
    listFiture[27].innerText = "Ajuda";
    listFiture[28].innerText = "Carregamento de contatos e n??o usu??riosConfigura????esRegistro de Atividades";
}



function deutsch() {
    // title tab
    getTheElement.title.innerText = "Facebook ??? Anmelden oder Registrieren";

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
    getTheElement.textCreatePage.text.innerText = "f??r einen Star, eine Marke oder ein Unternehmen.";

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
    listFiture[23].innerText = "Privatsph??re";
    listFiture[24].innerText = "Cookies";
    listFiture[25].innerText = "Werbepr??ferenzen";
    listFiture[26].innerText = "Nutzungsbedingungen";
    listFiture[27].innerText = "Hilfe";
    listFiture[28].innerText = "Hochladen von Kontakten und Nicht-Nutzer";
}