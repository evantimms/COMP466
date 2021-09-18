const PAGES = ['converter', 'mortgage', 'income']
let selected = 'converter'
let selectedType = 'weight'

RATIOS = {
    'lb-kg': 0.453592,
    'kg-lb': 2.20462,
    'cm-m': 0.1,
    'cm-km': 0.00001,
    'm-cm': 10,
    'm-km': 0.001,
    'km-cm': 10000,
    'km-m': 1000,
    'cm-in': 0.393701,
    'cm-ft': 0.0328084,
    'cm-miles': 0.00000621371,
    'm-in': 39.3701,
    'm-ft': 3.28084,
    'm-miles': 0.000621371,
    'km-in': 39370.1,
    'km-ft': 3280.84,
    'km-miles': 0.621371,
    'in-ft': 0.0833333,
    'in-miles': 0.000157828,
    'ft-in': 12,
    'ft-miles': 0.000189394,
    'miles-in': 63360,
    'miles-ft': 5280,
    'in-cm': 2.54,
    'in-m': 0.0254,
    'in-km': 0.0000254,
    'ft-cm': 30.48,
    'ft-m': 0.3048,
    'ft-km': 0.0003048,
    'miles-cm': 160934,
    'miles-m': 1609.34,
    'miles-km': 1.60934
}

FEDERAL_BRACKETS = [
    [15, 49020],
    [20.5, 49020],
    [26, 53939],
    [29, 64533],
    [33, 0]
]

BC = [
    [5.06, 42184],
    [7.7, 42185],
    [10.5, 12497],
    [12.29, 20757],
    [14.7, 41860],
    [16.8, 62937],
    [20.5, 0]
]

ALBERTA = [
    [10, 131220],
    [12, 26244],
    [13, 52488],
    [14, 104976],
    [15, 0]
]

SASKACHEWAN = [
    [10.5, 45677],
    [12.5, 84829],
    [14.5, 0]
]

MANITOBA = [
    [10.8, 33723],
    [12.75, 39162],
    [17.4, 0]
]

ONTARIO = [
    [5.05,  45142],
    [9.15,  45145],
    [11.16,  59713],
    [12.16,  70000],
    [13.16, 0]
]

NOVA_SCOTIA = [
    [8.79, 29590],
    [14.95, 29590],
    [16.67, 33820],
    [17.5, 57000],
    [21, 0]
]

YUKON = [
    [6.4, 49020],
    [9, 49020],
    [10.9, 53938],
    [12.8, 348022],
    [15, 0]
]

BRACKETS = {
    'alberta': ALBERTA,
    'bc': BC,
    'saskachewan': SASKACHEWAN,
    'manitoba': MANITOBA,
    'ontario': ONTARIO,
    'yukon': YUKON,
    'novascotia': NOVA_SCOTIA
}

function fetchPage () {

    function responseHandler () {
        document.querySelector('.content').innerHTML = this.responseText

        if (selected === 'converter') {
            document.querySelector('#type-selector').addEventListener('change', onNewTypeSelect)
            document.querySelector('#original').addEventListener('change', convert)
            document.querySelector('#original-unit-select').addEventListener('click', convert)
            document.querySelector('#convert-unit-select').addEventListener('click', convert)
        } else if (selected === 'mortgage') {
            document.querySelector('#principle').addEventListener('change', calculatemortgage)
            document.querySelector('#interest').addEventListener('change', calculatemortgage)
            document.querySelector('#periods').addEventListener('change', calculatemortgage)
            calculatemortgage()
        } else {
            document.querySelector('#income').addEventListener('change', calculateIncomeAfterTax)
            document.querySelector('#province').addEventListener('change', calculateIncomeAfterTax)
            calculateIncomeAfterTax()
        }
    }

    req = new XMLHttpRequest()
    req.addEventListener('load', responseHandler)
    req.open('GET', `sections/${selected}.html`)
    req.send()
}

function calculatemortgage () {
    principle = parseInt(document.querySelector('#principle').value)
    interest = parseFloat(document.querySelector('#interest').value) * 0.001
    repaymentPeriods = parseInt(document.querySelector('#periods').value) * 12
    answerBox = document.querySelector('#mortgage-answer')

    if (principle &&
        interest &&
        repaymentPeriods &&
        !isNaN(principle) &&
        !isNaN(interest) &&
        !isNaN(repaymentPeriods)
    ) {
        monthlyPayment = principle * ((interest * Math.pow((1 + interest), repaymentPeriods)) / (Math.pow((1 + interest), repaymentPeriods) - 1))
        answerBox.innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`
    }
   
}

function convert () {
    value = document.querySelector('#original')?.value
    originalUnit = document.querySelector('#original-unit-select')?.value
    convertUnit = document.querySelector('#convert-unit-select')?.value
    answerBox = document.querySelector('#convert-answer')

    if (value && value >= 0) {
        value = parseFloat(value) 

        if (originalUnit === convertUnit) {
            answerBox.innerHTML = `Answer: ${parseFloat(value)} ${convertUnit}`
        } else {
            let key, ratio
            let newValue
            if (originalUnit.includes('^2')) {
                key = `${originalUnit.slice(0, -2)}-${convertUnit.slice(0, -2)}`
                ratio = RATIOS[key]
                side = Math.sqrt(value)
                convertedSide = side * ratio
                newValue = Math.pow(convertedSide, 2)
            } else if (originalUnit.includes('^3')) {
                key = `${originalUnit.slice(0, -2)}-${convertUnit.slice(0, -2)}`
                ratio = RATIOS[key]
                side = Math.cbrt(value)
                convertedSide = side * ratio
                newValue = Math.pow(convertedSide, 3)
            } else {
                key = `${originalUnit}-${convertUnit}`
                ratio = RATIOS[key]
                newValue = value * ratio
            }
            
            answerBox.innerHTML = `Answer: ${parseFloat(newValue).toFixed(5)} ${convertUnit}`
        }
    } else {
        alert('Please enter a value')
    }
}

function calculateTaxWithBrackets (income, brackets) {
    let taxesPaid = 0
    let taxedIncome = 0
    for (let i = 0; i < brackets.length; ++i) {
        const [rate, incomeRange] = brackets[i]
        if (i === 0) {
            if (income < incomeRange) {
                taxesPaid += 0.01 * rate * income
                break
            }
        }

        if ((taxedIncome + incomeRange) < income && i !== brackets.length - 1) {
            taxesPaid += 0.01 * rate * incomeRange
        } else {
            taxesPaid += 0.01 * rate * (income - taxedIncome)
            break
        }
        taxedIncome += incomeRange
    }
    return taxesPaid
}

function calculateIncomeAfterTax () {
    let income = document.querySelector('#income').value
    let answerBox = document.querySelector('#income-answer')
    let province = document.querySelector('#province').value

    if (!isNaN(income) && income > 0) {
        income = parseInt(income)
        let provincalBrackets = BRACKETS[province]
        let federalBrackets = FEDERAL_BRACKETS

        const provincalTaxPaid = calculateTaxWithBrackets(income, provincalBrackets)
        const federalTaxPaid = calculateTaxWithBrackets(income, federalBrackets)
        let taxedIncome = 0
        

        const incomeRemaining = income - provincalTaxPaid - federalTaxPaid
        answerBox.innerHTML = `Provincal Tax Paid: $${provincalTaxPaid.toFixed(2)} : Federal Tax Paid $${federalTaxPaid.toFixed(2)}. Remaining income: $${incomeRemaining.toFixed(2)}`
    }
}

function onNewTypeSelect () {
    selectedType = document.querySelector('#type-selector').value
    document.querySelector('#convert-answer').innerHTML = 'Answer: '
    document.querySelectorAll('.option').forEach(option => {
        if (!option.classList.contains(selectedType)) {
            option.hidden = true
        } else {
            document.querySelector('#original-unit-select').value = option.value
            document.querySelector('#convert-unit-select').value = option.value
            option.hidden = false
        }
    })
}

function setup () {
     document.querySelectorAll('.sublink').forEach(el => {
        el.addEventListener('click', () => {
            document.querySelectorAll('.sublink').forEach(other => other.classList.remove('active'))

            el.classList.forEach(classname => {
                if (PAGES.includes(classname)) {
                    el.classList.add('active')
                    selected = classname
                }
            })
       
            fetchPage()
        })
    })

    fetchPage()
}

window.addEventListener('load', setup, false);