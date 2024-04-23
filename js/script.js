
const { createApp } = Vue

const dt = luxon.DateTime;

createApp({
    data() {
        return {

            // Chat aperta attualmente
            activeIndex: 0,

            // Ricerca chat
            search: '',

            // Apertura e Chiusura dropdown
            

            newMessage: {
                date: '',
                message: '',
                status: 'sent'
            },

            contacts: [
            
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,  // x filtro ricerca
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            isOpen: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            isOpen: false

                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            isOpen: false

                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',     
                            isOpen: false

                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',     
                            isOpen: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',     
                            isOpen: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',     
                            isOpen: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',     
                            isOpen: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',     
                            isOpen: false
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',     
                            isOpen: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',     
                            isOpen: false
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',     
                            isOpen: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',     
                            isOpen: false
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',     
                            isOpen: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',     
                            isOpen: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',     
                            isOpen: false
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',     
                            isOpen: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',     
                            isOpen: false
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',     
                            isOpen: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',     
                            isOpen: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',     
                            isOpen: false
                        }
                    ],
                }
            ]

        }
    },
    methods: {

        activeChat: function(clickedIndex) {
            this.activeIndex = clickedIndex;
        },

        sendMessage: function(newMessage){
            const now = dt.now();
            // console.log(now);
            const dateHuman = (now.toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS));

            this.newMessage.date = dateHuman

            this.contacts[this.activeIndex].messages.push({...this.newMessage})
            this.newMessage.message = ''

            const newDate = now.plus({ seconds: 1 }).toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);

            setTimeout(() => {
                this.contacts[this.activeIndex].messages.push({
                    date: newDate,
                    message: 'ok',
                    status: 'received'
                })
            }, 1000);
        },

        toggleDropdown: function(clickedIndex, activeIndex){ 
            // console.log("ciao", clickedIndex);
            this.contacts[activeIndex].messages[clickedIndex].isOpen = !this.contacts[activeIndex].messages[clickedIndex].isOpen
        },

        deleteMessage: function(clickedIndex, activeIndex){
            // console.log("elimina");
            this.contacts[activeIndex].messages.splice(clickedIndex, 1)
        },

        getContactAvatar: function(contact) {
            return `../img/avatar${contact.avatar}.jpg`
        }
    }
}).mount("#app")



// Libreria Luxon

// Data attuale

const now = dt.now(); // object --> data e ora al momento del richiamo della funzione
// Per visualizzare la data dobbiamo prima formattarla

// console.log(now.toString()); //formato ISO 8601

// console.log(now.toLocaleString()); // gg/mm/aaaa

// console.log(now.toLocaleString(luxon.DateTime.DATE_MED)); // gg/mese/aaaa

// console.log(now.toLocaleString(luxon.DateTime.DATETIME_HUGE)); //tutto

// console.log(now.setLocale('fr').toLocaleString(luxon.DateTime.DATETIME_HUGE)); //tutto in francese

console.log(now.toLocaleString(luxon.DateTime.DATETIME_SHORT_WITH_SECONDS)); //formato per esercizio boolzapp

// Trasformare stringa in oggetto luxon
const dateString = "10/01/2020" //string
const dateLuxon = dt.fromFormat(dateString, "dd/MM/yyyy"); //per fare operazioni matematica abbiamo bisogno dell'oggetto luxon e non possiamo farle sulla stringa!
console.log(dateLuxon);

// Ritrasformo in stringa
console.log(dateLuxon.toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS));





