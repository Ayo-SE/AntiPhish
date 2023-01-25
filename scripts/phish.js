/*
JSON COMMENTS (might need these bits of code later)

// "content_scripts": [
//     {
//         "js": ["scripts/phish.js"]
//     }
// ]

"permissions": ["activeTab"],
"background": {
    "service_worker": "phish.js"
},
"action": {
    "default_icon": "images/icon.png"
}

"background": {
    "service_worker": "scripts/background.js"
}
*/

/*
PHISH.JS COMMENTS (might need these bits of code later)

const paragraphs = document.querySelectrorAll('p');
for (const p of paragraphs) {
}

*/

//const gmail = 'https://mail.google.com/mail/u/0/#inbox'

const flagged_1 = ["urgent", "important", "confidential", "private"] // represents flagged "one compounded words"
const flagged_2 = ["security alert"] // represents flagged "two compounded words"
const flagged_3 = ["verify your account", "update your account", "click the link", "dear valued customer"] // represents flagged "three compounded words"
const flagged_4 = ["signin to your account"] // "represents flagged "four compounded words"
const flagged_5 = ["sign in to your account"] // "represents flagged "five compounded words"

const paragraphs = document.querySelectorAll('p');

//chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    //if (message === 'button_clicked') {
        for (const p of paragraphs) {
            let i = 1

            let text = p.textContent;
            let phrases = text.split(' ');

            if (i == 1) { // first loop for flagged 1
                i++

                for (const phrase of phrases) {
                    if (flagged_1.includes(phrase.toLowerCase())) {
                        console.log('Found suspicious word: ' + phrase)
                    }
                }
            }

            if (i == 2) { // first loop for flagged 2
                i++

                let twoPhrase = []

                for (let j = 0; j < phrases.length; j++) {
                    if (j >= phrases.length - 1) {
                        break;
                    } 
                    
                    let tempWord = phrases[j] + " " + phrases[j + 1]
                    //console.log(tempWord)
                    twoPhrase.push(tempWord)
                }
                //console.log(twoPhrase)
                for (const phrase of twoPhrase) {
                    if (flagged_2.includes(phrase.toLowerCase())) {
                        console.log('Found suspicious word: ' + phrase)
                    }
                }

            }

            if (i == 3) { // first loop for flagged 3
                i++

                let threePhrase = []

                for (let j = 0; j < phrases.length; j++) {
                    if (j >= phrases.length - 2) {
                        break;
                    } 
                    
                    let tempWord = phrases[j] + " " + phrases[j + 1] + " " + phrases[j + 2]
                    //console.log(tempWord)
                    threePhrase.push(tempWord)
                }
                //console.log(threePhrase)
                for (const phrase of threePhrase) {
                    if (flagged_3.includes(phrase.toLowerCase())) {
                        console.log('Found suspicious word: ' + phrase)
                    }
                }
            }

            if (i == 4) { // first loop for flagged 4
                i++

                let fourPhrase = []

                for (let j = 0; j < phrases.length; j++) {
                    if (j >= phrases.length - 3) {
                        break;
                    } 
                    
                    let tempWord = phrases[j] + " " + phrases[j + 1] + " " + phrases[j + 2] + " " + phrases[j + 3]
                    //console.log(tempWord)
                    fourPhrase.push(tempWord)
                }
                //console.log(fourPhrase)
                for (const phrase of fourPhrase) {
                    if (flagged_4.includes(phrase.toLowerCase())) {
                        console.log('Found suspicious word: ' + phrase)
                    }
                }
            }

            if (i == 5) { // first loop for flagged 5
                i++

                let fivePhrase = []

                for (let j = 0; j < phrases.length; j++) {
                    if (j >= phrases.length - 4) {
                        break;
                    } 
                    
                    let tempWord = phrases[j] + " " + phrases[j + 1] + " " + phrases[j + 2] + " " + phrases[j + 3] + " " + phrases[j + 4]
                    //console.log(tempWord)
                    fivePhrase.push(tempWord)
                }
                //console.log(fivePhrase)
                for (const phrase of fivePhrase) {
                    if (flagged_5.includes(phrase.toLowerCase())) {
                        console.log('Found suspicious word: ' + phrase)
                    }   
                }
            }

            if (i == 6) {
                console.log('End of loop')
            }
        }
    //}
  //});


//chrome.action.onClicked.addListener(async (tab) => {
    //if (tab.url.startsWith(gmail)) {

        // for (const p of paragraphs) {
        //     let i = 1

        //     if (i == 1) { // first loop for flagged 1
        //         i++

        //         let text = p.textContent;
        //         let phrases = text.split(' ');

        //         for (const phrase of phrases) {
        //             if (flagged_1.includes(phrase.toLowerCase())) {
        //                 console.log('Found suspicious word: ${phrase}')
        //             }
        //         }
        //     }

        //     if (i == 2) { // first loop for flagged 2
        //         i++

        //         let twoPhrase = []

        //         for (let j = 0; j < phrases.length; j++) {
        //             if (phrases.length % 2 != 0 && j == phrases.length - 1) {
        //                 break;
        //             } 
                    
        //             let tempWord = phrase[i] + " " + phrase[i + 1]
        //             twoPhrase.push(tempWord)
        //         }

        //         for (const phrase of twoPhrase) {
        //             if (flagged_2.includes(phrase.toLowerCase())) {
        //                 console.log('Found suspicious word: ${phrase}')
        //             }
        //         }

        //     }

        //     if (i == 3) { // first loop for flagged 3
        //         i++

        //         let threePhrase = []

        //         for (let j = 0; j < phrases.length; j++) {
        //             if (phrases.length % 3 != 0 && j == phrases.length - 2) {
        //                 break;
        //             } 
                    
        //             let tempWord = phrase[i] + " " + phrase[i + 1]
        //             threePhrase.push(tempWord)
        //         }

        //         for (const phrase of threePhrase) {
        //             if (flagged_3.includes(phrase.toLowerCase())) {
        //                 console.log('Found suspicious word: ${phrase}')
        //             }
        //         }
        //     }

        //     if (i == 4) { // first loop for flagged 4
        //         i++

        //         let fourPhrase = []

        //         for (let j = 0; j < phrases.length; j++) {
        //             if (phrases.length % 4 != 0 && j == phrases.length - 2) {
        //                 break;
        //             } 
                    
        //             let tempWord = phrase[i] + " " + phrase[i + 1]
        //             fourPhrase.push(tempWord)
        //         }

        //         for (const phrase of fourPhrase) {
        //             if (flagged_4.includes(phrase.toLowerCase())) {
        //                 console.log('Found suspicious word: ${phrase}')
        //             }
        //         }
        //     }

        //     if (i == 5) { // first loop for flagged 5
        //         i++

        //         let fivePhrase = []

        //         for (let j = 0; j < phrases.length; j++) {
        //             if (phrases.length % 4 != 0 && j == phrases.length - 2) {
        //                 break;
        //             } 
                    
        //             let tempWord = phrase[i] + " " + phrase[i + 1]
        //             fivePhrase.push(tempWord)
        //         }

        //         for (const phrase of fivePhrase) {
        //             if (flagged_5.includes(phrase.toLowerCase())) {
        //                 console.log('Found suspicious word: ${phrase}')
        //             }
        //         }
        //     }

        //     if (i == 6) {
        //         console.log('Nothing else was found')
        //     }
        // }
    //}
//});
