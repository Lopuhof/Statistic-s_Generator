let month = document.getElementById('month');
let monthButton = document.getElementById('month_button');
let completeButton = document.querySelector('.complete');
let alertInscription = document.querySelector('.alert');
let inputForMinAndMax = document.querySelectorAll('.input_for_min_and_max');
let monthDays = document.querySelectorAll('.month_number');
let row = document.querySelectorAll('tr');

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

let allReferences = document.querySelectorAll('.summ_all_reference');
let minAllReferences = document.querySelector('.min_references');
let maxAllReferences = document.querySelector('.max_references');
let referenceButton = document.querySelector('.generation_references');
let referencesAndConsultationsForUsersOfLibrary = document.querySelectorAll('.references_for_users');
let referenceForChildren = document.querySelectorAll('.references_for_childrens');
let bigChildren = document.querySelectorAll('.big_children');
let allConsultations = document.querySelectorAll('.all_consultations');
let references = document.querySelectorAll('.all_references');
let orien = document.querySelectorAll('.orientation');
let faculty = document.querySelectorAll('.faculty');
let helpTech = document.querySelectorAll('.help-tech');
let biblio = document.querySelectorAll('.bibliography');
let themes = document.querySelectorAll('.themes');
let addresses = document.querySelectorAll('.address');
let clarification = document.querySelectorAll('.clarification');
let facts = document.querySelectorAll('.facts');
let local = document.querySelectorAll('.local');
let health = document.querySelectorAll('.health');
let ecology = document.querySelectorAll('.ecology');

let summOfAll = document.querySelectorAll('.summ-of-all');
let summOfUsers = document.querySelectorAll('.summ-of-all-for-users');
let summOfChildrens = document.querySelectorAll('.summ-of-children');
let summOfBigChildren = document.querySelectorAll('.summ-of-big_children');
let summOfConsultations = document.querySelectorAll('.summ-of-consultations');
let summOfBibiliography = document.querySelectorAll('.summ-of-bibliography');
let summOfOrientation = document.querySelectorAll('.summ-of-orientations');
let summOfHelpTech = document.querySelectorAll('.summ-of-help-tech');
let summOfFaculty = document.querySelectorAll('.summ-of-faculty');
let summOfReferences = document.querySelectorAll('.summ-of-references');
let summOfThemes = document.querySelectorAll('.summ-of-themes');
let summOfAdress = document.querySelectorAll('.summ-of-address');
let summOfFacts = document.querySelectorAll('.summ-of-facts');
let summOfClarifications = document.querySelectorAll('.summ-of-clarifications');
let summOfLocal = document.querySelectorAll('.summ-of-local');
let summOfEcology = document.querySelectorAll('.summ-of-ecology');
let summOfHealth = document.querySelectorAll('.summ-of-health');

function generateAllReferences(
    summ, 
    min, 
    max, 
    others,
    forChildren,
    forBigChildren,
    consultations,
    summOfReferences,
    orientationsConsult,
    facultations,
    help,
    bibliography,
    theme,
    address,
    clare,
    factography,
    locality,
    healther,
    ecologiest,
    allSumm,
    sumUs,
    referencesForSmallChildren,
    sumBigChildren,
    consultationsOfAll,
    manyBibliography,
    manyOrien,
    manyFaculty,
    manyHelpTech,
    manyReferences,
    manyThemes,
    manyAdresses,
    manyFacts,
    manyClarifications,
    manyLocals,
    manyEcology,
    manyHealth,
    days
    ) {
    referenceButton.addEventListener('click', function() {
        min = +min.value;
        max = +max.value;
        let summOfEverything = 0;
        let sumOfAllUsers = 0;
        let smallChildren = 0;
        let bigChildren = 0;
        let manyConsultations = 0;
        let biblioConsultations = 0;
        let orienConsultations = 0;
        let faculties = 0;
        let helpsTechs = 0;
        let referencesOfAll = 0;
        let themesOfAll = 0;
        let adressesOfAll = 0;
        let factsOfAll = 0;
        let clarificationsOfAll = 0;
        let localsOfAll = 0;
        let ecologyOfAll = 0;
        let healthOfAll = 0;

        for (let i = 0; i < summ.length; i = i + 1) {

            if (days[i].style.color == 'red') {
                summ[i].textContent = '0';
            } else {

            orientationsConsult[i].textContent = Math.floor((Math.random() * ((60 - 50) + 50) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            help[i].textContent = Math.floor((Math.random() * ((20 - 10) + 10) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            bibliography[i].textContent = Math.floor((Math.random() * ((15 - 10) + 10) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            facultations[i].textContent = '0';
            consultations[i].textContent = (+orientationsConsult[i].textContent) + (+help[i].textContent) + (+bibliography[i].textContent) + (+facultations[i].textContent);

            theme[i].textContent = Math.floor((Math.random() * ((60 - 40) + 40) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            address[i].textContent = Math.floor((Math.random() * ((60 - 45) + 45) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            clare[i].textContent = Math.floor((Math.random() * ((40 - 30) + 30) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            factography[i].textContent = Math.floor((Math.random() * ((20 - 15) + 15) / 100) * Math.floor(Math.random() * ((max + 1) - min) + min));
            summOfReferences[i].textContent = (+theme[i].textContent) + (+address[i].textContent) + (+clare[i].textContent) + (+factography[i].textContent);

            summ[i].textContent = (+consultations[i].textContent) + (+summOfReferences[i].textContent);

            others[i].textContent = summ[i].textContent;
            forChildren[i].textContent = Math.floor(((Math.random() * ((100 - 80) + 65) / 100)) * others[i].textContent);
            forBigChildren[i].textContent = Math.floor(((Math.random() * ((95 - 79) + 45) / 100)) * others[i].textContent);

            locality[i].textContent = Math.floor(Math.random() * ((1 + 1) - 0) + 0);
            ecologiest[i].textContent = Math.floor(Math.random() * ((1 + 1) - 0) + 0);
            healther[i].textContent = Math.floor(Math.random() * ((1 + 1) - 0) + 0);

            //Суммы всего
            summOfEverything = (+summOfEverything) + (+summ[i].textContent);
            allSumm[0].textContent = +summOfEverything;

            sumOfAllUsers = (+sumOfAllUsers) + (+referencesAndConsultationsForUsersOfLibrary[i].textContent);
            sumUs[0].textContent = +sumOfAllUsers;

            smallChildren = (+smallChildren) + (+forChildren[i].textContent);
            referencesForSmallChildren[0].textContent = smallChildren;

            bigChildren = (+bigChildren) + (+forBigChildren[i].textContent);
            sumBigChildren[0].textContent = bigChildren;

            manyConsultations = (+manyConsultations) + (+allConsultations[i].textContent);
            consultationsOfAll[0].textContent = manyConsultations;

            biblioConsultations = (+biblioConsultations) + (+biblio[i].textContent);
            manyBibliography[0].textContent = biblioConsultations;

            orienConsultations = (+orienConsultations) + (+orien[i].textContent);
            manyOrien[0].textContent = orienConsultations;

            faculties = (+faculties) + (faculty[i].textContent);
            manyFaculty[0].textContent = faculties;

            helpsTechs = (+helpsTechs) + (+helpTech[i].textContent);
            manyHelpTech[0].textContent = helpsTechs;

            referencesOfAll = (+referencesOfAll) + (+references[i].textContent);
            manyReferences[0].textContent = referencesOfAll;

            themesOfAll = (+themesOfAll) + (+theme[i].textContent);
            manyThemes[0].textContent = themesOfAll;

            adressesOfAll = (+adressesOfAll) + (+address[i].textContent);
            manyAdresses[0].textContent = adressesOfAll;

            factsOfAll = (+factsOfAll) + (+facts[i].textContent);
            manyFacts[0].textContent = factsOfAll;

            clarificationsOfAll = (+clarificationsOfAll) + (+clare[i].textContent);
            manyClarifications[0].textContent = clarificationsOfAll;

            localsOfAll = (+localsOfAll) + (+local[i].textContent);
            manyLocals[0].textContent = localsOfAll;

            ecologyOfAll = (+ecologyOfAll) + (+ecology[i].textContent);
            manyEcology[0].textContent = ecologyOfAll;

            healthOfAll = (+healthOfAll) + (+health[i].textContent);
            manyHealth[0].textContent = healthOfAll;
            };
        };
    });
};

generateAllReferences(
    allReferences, 
    minAllReferences, 
    maxAllReferences, 
    referencesAndConsultationsForUsersOfLibrary, 
    referenceForChildren, 
    bigChildren, 
    allConsultations, 
    references, 
    orien, 
    faculty, 
    helpTech, 
    biblio, 
    themes, 
    addresses, 
    clarification, 
    facts, 
    local, 
    health, 
    ecology,
    summOfAll,
    summOfUsers,
    summOfChildrens,
    summOfBigChildren,
    summOfConsultations,
    summOfBibiliography,
    summOfOrientation,
    summOfFaculty,
    summOfHelpTech,
    summOfReferences,
    summOfThemes,
    summOfAdress,
    summOfFacts,
    summOfClarifications,
    summOfLocal,
    summOfEcology,
    summOfHealth,
    monthDays,
);

