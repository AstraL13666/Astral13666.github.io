function changeText() {
    // кнопки
    var changeButton = document.getElementById("changeLang");
    var simulationButton = document.getElementById("solarSimulation");

    const tabCap = document.querySelector("#tabCap p");

    const tabGenTitle = document.querySelector("#tabGeneral h3");
    const tabGenDesc = document.querySelector("#tabGeneral p");

    const tabObjSys = document.querySelector("#tabDescSys h3");
    
    // Объекты название
    const planetSunName = document.querySelector("#sun h3");
    const planetMerName = document.querySelector("#mercury h3");
    const planetVenName = document.querySelector("#venus h3");
    const planetEarName = document.querySelector("#earth h3");
    const planetMarName = document.querySelector("#mars h3");
    const planetJupName = document.querySelector("#jupiter h3");
    const planetSatName = document.querySelector("#saturn h3");
    const planetUraName = document.querySelector("#uranus h3");
    const planetNepName = document.querySelector("#neptune h3");
    const planetPluName = document.querySelector("#pluto h3");
    const planetMonName = document.querySelector("#moon h3");
    const planetCerName = document.querySelector("#ceres h3");
    const planetEriName = document.querySelector("#eris h3");

    // Тип объекта
    const planetSunType = document.querySelector("#sun h4");
    const planetMerType = document.querySelector("#mercury h4");
    const planetVenType = document.querySelector("#venus h4");
    const planetEarType = document.querySelector("#earth h4");
    const planetMarType = document.querySelector("#mars h4");
    const planetJupType = document.querySelector("#jupiter h4");
    const planetSatType = document.querySelector("#saturn h4");
    const planetUraType = document.querySelector("#uranus h4");
    const planetNepType = document.querySelector("#neptune h4");
    const planetPluType = document.querySelector("#pluto h4");
    const planetMonType = document.querySelector("#moon h4");
    const planetCerType = document.querySelector("#ceres h4");
    const planetEriType = document.querySelector("#eris h4");

    // Описание объектов
    const planetSunDesc = document.querySelector("#sun p");
    const planetMerDesc = document.querySelector("#mercury p");
    const planetVenDesc = document.querySelector("#venus p");
    const planetEarDesc = document.querySelector("#earth p");
    const planetMarDesc = document.querySelector("#mars p");
    const planetJupDesc = document.querySelector("#jupiter p");
    const planetSatDesc = document.querySelector("#saturn p");
    const planetUraDesc = document.querySelector("#uranus p");
    const planetNepDesc = document.querySelector("#neptune p");
    const planetPluDesc = document.querySelector("#pluto p");
    const planetMonDesc = document.querySelector("#moon p");
    const planetCerDesc = document.querySelector("#ceres p");
    const planetEriDesc = document.querySelector("#eris p");

    const tabQuestTitle = document.querySelector("#quest h4");
    const subTabQuest = document.querySelector("#quest p");

    const tabAnswerTitle = document.querySelector("#answer h4");
    const subTabAnswer = document.querySelector("#answer p");

    const tabInfoTitle = document.querySelector("#tabInfo h3");
    const tabInfoText = document.querySelector("#tabInfo h4");
    const tabIconSet = document.querySelector("#tabIconSet h4");
    const tabIconText = document.querySelector("#tabIconSet a");
    const tabSolarSimulationTitle = document.querySelector("#tabSolarSimulation h4");
    const tabSolarSimulationText = document.querySelector("#tabSolarSimulation p");
    const buttomText = document.querySelector("#buttomText h4");

    if (changeButton.innerHTML == "English") {
        changeButton.innerText = "Русский"
        simulationButton.innerText = "Симуляция"
        
        tabCap.innerHTML = "<p><i><b>Привет, юный любитель космоса</b></i><br>Здесь ты найдешь краткую информацию о солнечной системе<br><br>Изменить язык - <u>правая кнопка</u><br>Обзор Солнечной системы - <u>левая</u></p>"
        tabGenTitle.innerHTML = "Солнечная система"
        tabGenDesc.innerHTML = "Это планетарная система<br>со звездой в центре: <b>Солнцем</b><br> Солнечная система образовалась<br>4.57 млрд. лет назад в результате гравитационного сжатия газо-пылевого облака.<br><br>Солнечная система делится на 2 группы:<br><br><u>1 группа - планеты земной группы:</u><br> Меркурий, Венера, Земля и Марс.<br><br><u>2 группа - планеты гиганты:</u><br> Юпитер, Сатурн, Уран и Нептун.<br><br>Так же в Солнечной системе есть<br>области с планетами малых размеров,<br>а так же две области астеройдов<br><br>Первая область астеройдов:<br><u>Пояс астеройдов</u> - она расположена между Марсом и Юпитером<br><br>Вторая область астеройдов:<br><u>Пояс Койпера</u> - расположенная за Нептуном<br><br> Солнечная система находится в составе галактики Млечный путь.<br>"

        tabObjSys.innerHTML = "Объекты Солнечной системы"

        planetSunName.innerText = "Солнце"
        planetSunType.innerText = "Звезда"
        planetSunDesc.innerHTML = "<p>Центр системы<br>Экватор: 4,37⋅10^6<br>Объём: 1,40⋅10^27<br>Масса: 1,98⋅10^30<br>Спутников: 8</p>"

        planetMerName.innerText = "Меркурий"
        planetMerType.innerText = "Планета земной группы"
        planetMerDesc.innerHTML = "<p>1 планета<br>Экватор: 15329<br>Объём: 6,08⋅10^10<br>Масса: 3,33⋅10^23<br>Спутников: 0</p>"

        planetVenName.innerText = "Венера"
        planetVenType.innerText = "Планета земной группы"
        planetVenDesc.innerHTML = "<p>2 планета<br>Экватор: 38025<br>Объём: 9,38⋅10^11<br>Масса: 4,86⋅10^24<br>Спутников: 0</p>"

        planetEarName.innerText = "Земля"
        planetEarType.innerText = "Планета земной группы"
        planetEarDesc.innerHTML = "<p>3 планета<br>Экватор: 40075<br>Объём: 10,08⋅10^12<br>Масса: 5,97⋅10^24<br>Спутников: 1</p>"

        planetMarName.innerText = "Марс"
        planetMarType.innerText = "Планета земной группы"
        planetMarDesc.innerHTML = "<p>4 планета<br>Экватор: 21343<br>Объём: 1,63⋅10^11<br>Масса: 6,41⋅10^23<br>Спутников: 2</p>"

        planetJupName.innerText = "Юпитер"
        planetJupType.innerText = "Планета гигант"
        planetJupDesc.innerHTML = "<p>5 планета<br>Экватор: 439264<br>Объём: 1,43⋅10^15<br>Масса: 1,89⋅10^27<br>Спутников: 95</p>"

        planetSatName.innerText = "Сатурн"
        planetSatType.innerText = "Планета гигант"
        planetSatDesc.innerHTML = "<p>6 планета<br>Экватор: 378675<br>Объём: 8,27⋅10^14<br>Масса: 5,68⋅10^26<br>Спутников: 83</p>"

        planetUraName.innerText = "Уран"
        planetUraType.innerText = "Планета гигант"
        planetUraDesc.innerHTML = "<p>7 планета<br>Экватор: 51118<br>Объём: 6,83⋅10^13<br>Масса: 8,68⋅10^25<br>Спутников: 27</p>"

        planetNepName.innerText = "Нептун"
        planetNepType.innerText = "Планета гигант"
        planetNepDesc.innerHTML = "<p>8 планета<br>Экватор: 49528<br>Объём: 6,25⋅10^13<br>Масса: 10,02⋅10^26<br>Спутников: 14</p>"

        planetPluName.innerText = "Плутон"
        planetPluType.innerText = "Транснептуновый объект"
        planetPluDesc.innerHTML = "<p>9 планета<br>Экватор: 2370<br>Объём: 7⋅10^9<br>Масса: 1,30⋅10^22<br>Спутников: 5</p>"

        planetMonName.innerText = "Луна"
        planetMonType.innerText = "Спутник Земли"
        planetMonDesc.innerHTML = "<p>Спутник<br>Экватор: 10920<br>Объём: 2,19⋅10^10<br>Масса: 7,34⋅10^22<br>Спутников: 0</p>"

        planetCerName.innerText = "Церера"
        planetCerType.innerText = "Карликовая планета"
        planetCerDesc.innerHTML = "<p>Пояс астеройдов<br>Экватор: 481,5<br>Объём: 418⋅10^6<br>Масса: 9,39⋅10^20<br>Спутников: 0</p>"

        planetEriName.innerText = "Эрис"
        planetEriType.innerText = "Карликовая планета"
        planetEriDesc.innerHTML = "<p>Пояс Койпера<br>Экватор: 2326<br>Объём: 6,58⋅10^9<br>Масса: 1,68⋅10^22<br>Спутников: 1</p>"

        tabQuestTitle.innerHTML = "Вопрос:"
        subTabQuest.innerHTML = "Почему у Солнца 8 спутников?"

        tabAnswerTitle.innerHTML = "Ответ:"
        subTabAnswer.innerHTML = "У Солнца конечно же больше спутников, но я считал только основные, а именно: Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран, Нептун"

        tabInfoTitle.innerHTML = "Информация"
        tabInfoText.innerHTML = "Программист"
        tabIconSet.innerHTML = "Иконки"
        tabIconText.innerHTML = "Сборка иконок: Солнечная система"
        tabSolarSimulationTitle.innerHTML = "Симуляция Солнечной системы"
        tabSolarSimulationText.innerHTML = "Взято и адаптировано <a href=https://terminalroot.com/solar-system-made-with-html-css-and-pure-javascript/>отсюда</a>"
        buttomText.innerHTML = "Спасибо за уделенное время - моей работе!"

    } else {
        changeButton.innerText = "English"
        simulationButton.innerText = "Solar Simulation"

        tabCap.innerHTML = "<p><i><b>Greetings, young space lover</b></i><br>Here is information about the solar system.<br><br>To change the language - <u>right button</u><br>Overview of the solar system - <u>left button</u></p>"
        tabGenTitle.innerHTML = "THE SOLAR SYSTEM"
        tabGenDesc.innerHTML = "This's a planetary system that includes the central star the Sun and all natural space objects in heliocentric orbits.<br> It was formed by gravitational compression of a gas-dust cloud about 4.57 billion years ago.<br><br> <u>The four planets closest to the Sun are the terrestrial planets:</u><br> Mercury, Venus, Earth and Mars.<br><br> <u>The four planets more distant from the Sun are giant planets:</u><br> Jupiter, Saturn, Uranus and Neptune.<br><br> There are two regions in the Solar System filled with small bodies.<br><br> The asteroid belt located between Mars and Jupiter and beyond the orbit of Neptune are trans-Neptunian objects.<br><br> The solar system is part of the structure of the Milky Way galaxy.<br>"
    
        tabObjSys.innerHTML = "THE MAIN OBJECTS OF THE SOLAR SYSTEM"

        planetSunName.innerText = "Sun"
        planetSunType.innerText = "Star"
        planetSunDesc.innerHTML = "<p>Center Solar system<br>Equator: 4,37⋅10^6<br>Value: 1,40⋅10^27<br>Mass: 1,98⋅10^30<br>Satellite: 8</p>"

        planetMerName.innerText = "Mercury"
        planetMerType.innerText = "Earth group planet"
        planetMerDesc.innerHTML = "<p>1 planet<br>Equator: 15329<br>Value: 6,08⋅10^10<br>Mass: 3,33⋅10^23<br>Satellite: 0</p>"

        planetVenName.innerText = "Venus"
        planetVenType.innerText = "Earth group planet"
        planetVenDesc.innerHTML = "<p>2 planet<br>Equator: 38025<br>Value: 9,38⋅10^11<br>Mass: 4,86⋅10^24<br>Satellite: 0</p>"

        planetEarName.innerText = "Earth"
        planetEarType.innerText = "Earth group planet"
        planetEarDesc.innerHTML = "<p>3 planet<br>Equator: 40075<br>Value: 10,08⋅10^12<br>Mass: 5,97⋅10^24<br>Satellite: 1</p>"

        planetMarName.innerText = "Mars"
        planetMarType.innerText = "Earth group planet"
        planetMarDesc.innerHTML = "<p>4 planet<br>Equator: 21343<br>Value: 1,63⋅10^11<br>Mass: 6,41⋅10^23<br>Satellite: 2</p>"

        planetJupName.innerText = "Jupiter"
        planetJupType.innerText = "Giant planet"
        planetJupDesc.innerHTML = "<p>5 planet<br>Equator: 439264<br>Value: 1,43⋅10^15<br>Mass: 1,89⋅10^27<br>Satellite: 95</p>"

        planetSatName.innerText = "Saturn"
        planetSatType.innerText = "Giant planet"
        planetSatDesc.innerHTML = "<p>6 planet<br>Equator: 378675<br>Value: 8,27⋅10^14<br>Mass: 5,68⋅10^26<br>Satellite: 83</p>"

        planetUraName.innerText = "Uranus"
        planetUraType.innerText = "Giant planet"
        planetUraDesc.innerHTML = "<p>7 planet<br>Equator: 51118<br>Value: 6,83⋅10^13<br>Mass: 8,68⋅10^25<br>Satellite: 27</p>"

        planetNepName.innerText = "Neptune"
        planetNepType.innerText = "Giant planet"
        planetNepDesc.innerHTML = "<p>8 planet<br>Equator: 49528<br>Value: 6,25⋅10^13<br>Mass: 10,02⋅10^26<br>Satellite: 14</p>"

        planetPluName.innerText = "Pluto"
        planetPluType.innerText = "Trans-Neptunian"
        planetPluDesc.innerHTML = "<p>9 planet<br>Equator: 2370<br>Value: 7⋅10^9<br>Mass: 1,30⋅10^22<br>Satellite: 5</p>"

        planetMonName.innerText = "Moon"
        planetMonType.innerText = "Satellite Earth"
        planetMonDesc.innerHTML = "<p>Satellite<br>Equator: 10920<br>Value: 2,19⋅10^10<br>Mass: 7,34⋅10^22<br>Satellite: 0</p>"

        planetCerName.innerText = "Ceres"
        planetCerType.innerText = "Dwarf planet"
        planetCerDesc.innerHTML = "<p>Asteroid belt<br>Equator: 481,5<br>Value: 418⋅10^6<br>Mass: 9,39⋅10^20<br>Satellite: 0</p>"

        planetEriName.innerText = "Eris"
        planetEriType.innerText = "Dwarf planet"
        planetEriDesc.innerHTML = "<p>Scattered disk<br>Equator: 2326<br>Value: 6,58⋅10^9<br>Mass: 1,68⋅10^22<br>Satellite: 1</p>"

        tabQuestTitle.innerHTML = "Question:"
        subTabQuest.innerHTML = "Why does the Sun have 8 satellites?"

        tabAnswerTitle.innerHTML = "Answer:"
        subTabAnswer.innerHTML = "The Sun certainly has more satellites, but I counted only the main planets as satellites: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune"

        tabInfoTitle.innerHTML = "INFORMATION"
        tabInfoText.innerHTML = "Creator site and bot"
        tabIconSet.innerHTML = "Icon"
        tabIconText.innerHTML = "Iconset: Solar system icons"
        tabSolarSimulationTitle.innerHTML = "Simulation solar system"
        tabSolarSimulationText.innerHTML = "Taken and adapted from <a href=https://terminalroot.com/solar-system-made-with-html-css-and-pure-javascript/>Resource</a>"
        buttomText.innerHTML = "Thank you for using my bot!"
    }
}