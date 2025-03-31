let month = document.getElementById('month');
let monthButton = document.getElementById('month_button');
let completeButton = document.querySelector('.complete');
let alertInscription = document.querySelector('.alert');
let inputForMinAndMax = document.querySelectorAll('.input_for_min_and_max');
let monthDays = document.querySelectorAll('.month_number');
let row = document.querySelectorAll('tr');
let referenceButton = document.querySelectorAll('.generation_references');

function newClasses(rows) {
    for (let i = 6; i < rows.length; i = i + 1) {
        rows[i].classList.add('foneForNotWork');
    }
    return rows;
}

newClasses(row);

function completeInput(btnComplete, btnNew, maxAndMinInputs, inscription) {
    btnComplete.addEventListener('click', function() {
        btnNew.style.display = 'block';
        maxAndMinInputs[0].style.display = 'block';
        maxAndMinInputs[1].style.display = 'block';
        inscription.style.display = 'none';
        btnComplete.style.display = 'none';
    });
};

completeInput(completeButton, referenceButton[0], inputForMinAndMax, alertInscription);

let notWorkDays = document.querySelectorAll('.foneForNotWork');

function notWork(days, rows) {
    for (let i = 0; i < days.length; i = i + 1) {
        days[i].addEventListener('click', function() {
            days[i].style.color = 'red';
            rows[i + 6].style.backgroundColor = '#ce93d8';
        });
    };
};

notWork(monthDays, row);

let minAllReferences = document.querySelector('.min_books');
let maxAllReferences = document.querySelector('.max_books');

//Обращаемся к DOM-элементам

let fysicalDocuments = document.querySelectorAll('.fisical_documents');
let allStationDocuments = document.querySelectorAll('.all_station_documents');
let childrensBefore14 = document.querySelectorAll('.childrens_before_14');
let childrensMore15 = document.querySelectorAll('.childrens_more_15');
let allDocumentsTypesAndView = document.querySelectorAll('.all_documents_types_and_view');
let books = document.querySelectorAll('.books');
let magazines = document.querySelectorAll('.magazines');
let socialsAndEconomics = document.querySelectorAll('.socials_and_economics');
let medicine = document.querySelectorAll('.medicine');
let technic = document.querySelectorAll('.technic');
let artAndFhysicalEducation = document.querySelectorAll('.art_and_fhysical_education');
let languages = document.querySelectorAll('.languages');
let artisticLiterature = document.querySelectorAll('.artistic-literature');
let forSmallChildren = document.querySelectorAll('.for_small_children');
let childrensLiterature = document.querySelectorAll('.childrens_literature');
let bibliography = document.querySelectorAll('.bibliography');
let local = document.querySelectorAll('.local');

//суммы всего на свете

let summOfAll = document.querySelectorAll('.summ-of-all');
let summOfStationDocuments = document.querySelectorAll('.summ-of-station-documents');
let summChildren14 = document.querySelectorAll('.summ-children-14');
let summChildren15 = document.querySelectorAll('.summ-children-15');
let summOfAllTypeAndKind = document.querySelectorAll('.summ-of-all-type-and-kind');
let summBooks = document.querySelectorAll('.summ-books');
let summMagazines = document.querySelectorAll('.summ-magazines');
let summSocials = document.querySelectorAll('.summ-socials');
let summMedicines = document.querySelectorAll('.summ-medicines');
let summTechnicals = document.querySelectorAll('.summ-technicals');
let summArts = document.querySelectorAll('.summ-arts');
let summLanguages = document.querySelectorAll('.summ-languages');
let summArtisticLiterature = document.querySelectorAll('.summ-artistic-literature');
let summSmallChildrens = document.querySelectorAll('.summ-small-childrens');
let summChildrensLiterature = document.querySelectorAll('.summ-childrens-literature');
let summBibliography = document.querySelectorAll('.summ-bibliography');
let summLocal = document.querySelectorAll('.summ-local');

function generateAllReferences( 
    summ,
    days,
    min, 
    max, 
    forChildrens,
    forLittleChildrens,
    artisticBook,
    philology,
    artBooks,
    tech,
    med,
    socEconom,
    periodic,
    literature,
    allDocumentsTypeAndKinds,
    station,
    kids14,
    kids15AndMore,
    summFysical,
    summStations,
    summChildrens14,
    summChildren15,
    summBooksAndPeriodics,
    summOfBooks,
    summOfPeriodics,
    summOfSocEcon,
    summMedicine,
    summTechAndVillage,
    summArtsAndSports,
    summAllLanguages,
    summOfArtisticsLiterature,
    summOfAllBooksForSmallChildrens,
    summOfAllChildrensBooks,
    biblio,
    summOfBilio,
    locality,
    summOfLocality
    ) {
    referenceButton[0].addEventListener('click', function() {
        min = +min.value;
        max = +max.value;
        let summOfEverything = 0;
        let summOfAllStations = 0;
        let summOfSmallChildren = 0;
        let summOfChildrens15AndMore = 0;
        let summPeriodicAndBooks = 0;
        let summOfAllBooks = 0;
        let summOfMagazines = 0;
        let summOfSoc = 0;
        let summMed = 0;
        let summTech = 0;
        let summSports = 0;
        let languagesAll = 0;
        let allArtiscticLiterature = 0;
        let allForSmallChildrens = 0;
        let allChildrensBooks = 0;
        let allBiblio = 0;
        let allLocal = 0;

        for (let i = 0; i < summ.length; i = i + 1) {

            if (days[i].style.color == 'red') {
                summ[i].textContent = '0';
            } else {

                //Элементы, из которых складывается общая сумма

                forChildrens[i].textContent = Math.floor((Math.random() * ((85 - 80) + 80) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
                forLittleChildrens[i].textContent = Math.floor((Math.random() * ((85 - 80) + 80) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
                artisticBook[i].textContent = Math.floor((Math.random() * ((85 - 80) + 80) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
                philology[i].textContent = Math.floor((Math.random() * ((20 - 18) + 18) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
                artBooks[i].textContent =  Math.floor((Math.random() * ((6 - 4) + 4) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
                tech[i].textContent =  Math.floor((Math.random() * ((6 - 4) + 4) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
                med[i].textContent =  Math.floor((Math.random() * ((6 - 4) + 4) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
                socEconom[i].textContent = Math.floor((Math.random() * ((6 - 4) + 4) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
                biblio[i].textContent = Math.floor((Math.random() * ((1 - 0) + 0) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
                locality[i].textContent = Math.floor((Math.random() * ((1 - 0) + 0) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));

                //Элементы с общей суммой

                allDocumentsTypeAndKinds[i].textContent = ((+forLittleChildrens[i].textContent) + (+artisticBook[i].textContent) + (+philology[i].textContent) + (+artBooks[i].textContent) + (+tech[i].textContent) + (+med[i].textContent) + (+socEconom[i].textContent) + (+periodic[i].textContent));
                periodic[i].textContent = Math.floor((Math.random() * ((40 - 40) + 40) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
                literature[i].textContent = Math.floor((Math.random() * ((60 - 60) + 60) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
                summ[i].textContent = allDocumentsTypeAndKinds[i].textContent;
                station[i].textContent = summ[i].textContent;


                //Категории пользователей

                kids14[i].textContent = Math.floor((Math.random() * ((78 - 70) + 70) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
                kids15AndMore[i].textContent = Math.floor((Math.random() * ((20 - 16) + 16) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));

                //Суммы всех показателей

                summOfEverything = +summOfEverything + (+summ[i].textContent);
                summFysical[0].textContent = summOfEverything;

                summOfAllStations = +summOfAllStations + (+allStationDocuments[i].textContent);
                summStations[0].textContent = summOfAllStations;

                summOfSmallChildren = +summOfSmallChildren + (+childrensBefore14[i].textContent);
                summChildrens14[0].textContent = summOfSmallChildren;

                summOfChildrens15AndMore = +summOfChildrens15AndMore + (+kids15AndMore[i].textContent);
                summChildren15[0].textContent = summOfChildrens15AndMore;

                summPeriodicAndBooks = +summPeriodicAndBooks + (+allDocumentsTypeAndKinds[i].textContent);
                summBooksAndPeriodics[0].textContent = summPeriodicAndBooks;

                summOfAllBooks = +summOfAllBooks + (+literature[i].textContent);
                summOfBooks[0].textContent = summOfAllBooks;

                summOfMagazines = +summOfMagazines + (+periodic[i].textContent);
                summOfPeriodics[0].textContent = summOfMagazines;

                summOfSoc = +summOfSoc + (+socEconom[i].textContent);
                summOfSocEcon[0].textContent = summOfSoc;

                summMed = +summMed + (+med[i].textContent);
                summMedicine[0].textContent = summMed;

                summTech = +summTech + (+tech[i].textContent);
                summTechAndVillage[0].textContent = summTech;

                summSports = +summSports + (+artBooks[i].textContent);
                summArtsAndSports[0].textContent = summSports;

                languagesAll = +languagesAll + (+philology[i].textContent);
                summAllLanguages[0].textContent = languagesAll;

                allArtiscticLiterature = +allArtiscticLiterature + (+artisticBook[i].textContent);
                summOfArtisticsLiterature[0].textContent = allArtiscticLiterature;

                allForSmallChildrens = +allForSmallChildrens + (+forLittleChildrens[i].textContent);
                summOfAllBooksForSmallChildrens[0].textContent = allForSmallChildrens;

                allChildrensBooks = +allChildrensBooks + (+forChildrens[i].textContent);
                summOfAllChildrensBooks[0].textContent = allChildrensBooks;

                allBiblio = +allBiblio + (+biblio[i].textContent);
                summOfBilio[0].textContent = allBiblio;

                allLocal = +allLocal + (+locality[i].textContent);
                summOfLocality[0].textContent = allLocal;
            };
        };
    });
};

generateAllReferences( 
    fysicalDocuments,
    monthDays,
    minAllReferences, 
    maxAllReferences, 
    childrensLiterature,
    forSmallChildren,
    artisticLiterature, 
    languages, 
    artAndFhysicalEducation, 
    technic,
    medicine,
    socialsAndEconomics,
    magazines,
    books,
    allDocumentsTypesAndView,
    allStationDocuments,
    childrensBefore14,
    childrensMore15,
    summOfAll,
    summOfStationDocuments,
    summChildren14,
    summChildren15,
    summOfAllTypeAndKind,
    summBooks,
    summMagazines,
    summSocials,
    summMedicines,
    summTechnicals,
    summArts,
    summLanguages,
    summArtisticLiterature,
    summSmallChildrens,
    summChildrensLiterature,
    bibliography,
    summBibliography,
    local,
    summLocal
);
