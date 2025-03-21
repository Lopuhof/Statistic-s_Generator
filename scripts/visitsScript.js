let month = document.getElementById('month');
let monthButton = document.getElementById('month_button');
let completeButton = document.querySelector('.complete');
let alertInscription = document.querySelector('.alert');
let btn = document.querySelector('.generation_references');
let inputForMinAndMax = document.querySelectorAll('.input_for_min_and_max');
let monthDays = document.querySelectorAll('.month_number');
let row = document.querySelectorAll('tr');
let minInput = document.querySelectorAll('.min_visits');
let maxInput = document.querySelectorAll('.max_visits');

//Обращаемся к DOM-элементам

let childrens14 = document.querySelectorAll('.childrens_before_14');
let childrens15 = document.querySelectorAll('.childrens_between_15_30');
let readersMore31 = document.querySelectorAll('.more_31');
let informationLibraryServices = document.querySelectorAll('.information_library_services');
let libraryVisits = document.querySelectorAll('.library_visits');
let summAllVisits = document.querySelectorAll('.summ_of_visits');
let uniqualUsers = document.querySelectorAll('.uniqual_users');
let booksOfUniqualUsers = document.querySelectorAll('.books_of_uniqual_users');

let summAllReaders = document.querySelectorAll('.summ_all_visits');
let summLibraryVisits = document.querySelectorAll('.summ_all_visits_of_library');
let summInformationServices = document.querySelectorAll('.summ_all_services_library');
let summChildrens14 = document.querySelectorAll('.summ_childrens14');
let summChildrens15 = document.querySelectorAll('.summ_childrens15');
let summReadersMore31 = document.querySelectorAll('.summ_visits_from31');
let summUniqualUsers = document.querySelectorAll('.summ_uniqual_users');
let summBooksUniqual = document.querySelectorAll('.summ_books_uniqual');

//Пишем функции для кнопок

function newClasses(rows) {
    for (let i = 6; i < rows.length; i = i + 1) {
        rows[i].classList.add('foneForNotWork');
    }
    return rows;
}

newClasses(row);

function completeInput(btnComplete, btnNew, maxAndMinInputs, inscription) {
    btnComplete.addEventListener('click', function(){
        btnNew.style.display = 'block';
        maxAndMinInputs[0].style.display = 'block';
        maxAndMinInputs[1].style.display = 'block';
        inscription.style.display = 'none';
        btnComplete.style.display = 'none';
    });
};

completeInput(completeButton, btn, inputForMinAndMax, alertInscription);

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

function generateVisits(
    minimum,
    maximum,
    days,
    allReaders,    
    smallReaders,
    middleReaders,
    more31Readers,
    readersForServices,
    readersOfLibrary,
    allReaders,
    summEverythingReader,
    summVisitsInLibrary,
    summLibrariesServices,
    summSmallChildrens,
    summTeens,
    summBigReaders,
    uniqual,
    summUniqual,
    booksForUniqualUsers,
    summBooksForUniqualUsers
) {
    btn.addEventListener('click', function() {
        minimum = +minimum[0].value;
        maximum = +maximum[0].value;

        let finalSummAll = 0;
        let finaVisitsOfLibrary = 0;
        let finalLibrariesServices = 0;
        let finalSummChildrens = 0;
        let finalSummTeens = 0;
        let finalSummBigReaders = 0;
        let finalSummUniqualReaders = 0;
        let finalSummBooksOfUniqualUsers = 0;

        for (let i = 0; i < allReaders.length; i = i + 1) {

            if (days[i].style.color == 'red') {
                allReaders[i].textContent = '0';
            } else {
                smallReaders[i].textContent = Math.floor((Math.random() * ((60 - 50) + 50) / 100) * Math.floor(Math.random() * ((maximum + 1) - minimum) + minimum));
                middleReaders[i].textContent = Math.floor((Math.random() * ((40 - 35) + 35) / 100) * Math.floor(Math.random() * ((maximum + 1) - minimum) + minimum));
                more31Readers[i].textContent = Math.floor((Math.random() * ((75 - 60) + 60) / 100) * Math.floor(Math.random() * ((maximum + 1) - minimum) + minimum));
                readersForServices[i].textContent = (+smallReaders[i].textContent) + (+middleReaders[i].textContent) + (+more31Readers[i].textContent); 
                readersOfLibrary[i].textContent = readersForServices[i].textContent;
                allReaders[i].textContent = readersOfLibrary[i].textContent;
                uniqual[i].textContent = Math.floor((Math.random() * ((2 - 1) + 1) / 100) * Math.floor(Math.random() * ((maximum + 1) - minimum) + minimum));

                if (uniqual[i].textContent > 0) {
                    booksForUniqualUsers[i].textContent = Math.floor((Math.random() * ((3 - 1) + 1) / 100) * Math.floor(Math.random() * ((maximum + 2) - minimum) + minimum))
                } else {
                    booksForUniqualUsers[i].textContent = 0;
                };



                //Суммы всего
                finalSummAll = +finalSummAll + (+allReaders[i].textContent);
                summEverythingReader[0].textContent = finalSummAll; 

                finaVisitsOfLibrary = +finaVisitsOfLibrary + (+readersOfLibrary[i].textContent);
                summVisitsInLibrary[0].textContent = finaVisitsOfLibrary;

                finalLibrariesServices = +finalLibrariesServices + (+readersForServices[i].textContent);
                summLibrariesServices[0].textContent = finalLibrariesServices;

                finalSummChildrens = +finalSummChildrens + (+smallReaders[i].textContent);
                summSmallChildrens[0].textContent = finalSummChildrens;

                finalSummTeens = +finalSummTeens + (+middleReaders[i].textContent);
                summTeens[0].textContent = finalSummTeens;

                finalSummBigReaders = (+finalSummBigReaders) + (+more31Readers[i].textContent);
                summBigReaders[0].textContent = finalSummBigReaders;

                finalSummUniqualReaders = (+finalSummUniqualReaders) + (+uniqual[i].textContent);
                summUniqual[0].textContent = finalSummUniqualReaders;

                finalSummBooksOfUniqualUsers = (+finalSummBooksOfUniqualUsers) + (+booksForUniqualUsers[i].textContent);
                summBooksForUniqualUsers[0].textContent = finalSummBooksOfUniqualUsers;
            };
        };
    });
};

generateVisits(
    minInput,
    maxInput,
    monthDays,
    summAllVisits,
    childrens14,
    childrens15,
    readersMore31,
    informationLibraryServices,
    libraryVisits,
    summAllVisits,
    summAllReaders,
    summLibraryVisits,
    summInformationServices,
    summChildrens14,
    summChildrens15,
    summReadersMore31,
    uniqualUsers,
    summUniqualUsers,
    booksOfUniqualUsers,
    summBooksUniqual
);
