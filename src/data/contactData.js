const contact_data = [
{
    contact_id: 1,
    contact_name: 'Maria',
    contact_avatar: "https://strategicplatform.com/hs-fs/hubfs/buyer%20persona%20ejemplos%20%20maria%20marketing.jpg?width=1008&name=buyer%20persona%20ejemplos%20%20maria%20marketing.jpg",
    contact_unseen_messages: 2,
    last_message_content: 'testing message',
    last_message_state: 'RECEIVED', /* 'NOT_SEND', 'NOT_RECEIVED', 'RECEIVED', SEEN  */
    last_message_created_at: new Date()
},
{
    contact_id: 2,
    contact_name: 'Carlos',
    contact_avatar: "https://strategicplatform.com/hs-fs/hubfs/buyer%20persona%20ejemplos%20%20carlos%20retail.jpg?width=849&name=buyer%20persona%20ejemplos%20%20carlos%20retail.jpg",
    contact_unseen_messages: 0,
    last_message_content: 'Que tal?',
    last_message_state: 'SEEN', /* 'NOT_SEND', 'NOT_RECEIVED', 'RECEIVED', SEEN  */
    last_message_created_at: new Date()
},
{
    contact_id: 3,
    contact_name: 'Silvio',
    contact_avatar: "https://tse1.mm.bing.net/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?rs=1&pid=ImgDetMain&o=7&rm=3",
    contact_unseen_messages: 1,
    last_message_content: 'Hola, como estas?',
    last_message_state: 'RECEIVED', /* 'NOT_SEND', 'NOT_RECEIVED', 'RECEIVED', SEEN  */
    last_message_created_at: new Date()
},
{
    contact_id: 4,
    contact_name: 'Camila',
    contact_avatar: "https://cdn.pixabay.com/photo/2019/02/18/23/44/profile-4005803_1280.jpg",
    contact_unseen_messages: 0,
    last_message_content: 'Hiciste el trabajo?',
    last_message_state: 'SEEN', /* 'NOT_SEND', 'NOT_RECEIVED', 'RECEIVED', SEEN  */
    last_message_created_at: new Date()
},
{
    contact_id: 5,
    contact_name: 'Gerardo',
    contact_avatar: "https://tse1.mm.bing.net/th/id/OIP.dRTNQ9mB2k0BxSAkiapmMgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    contact_unseen_messages: 0,
    last_message_content: 'Por fin termine el proyecto',
    last_message_state: 'SEEN', /* 'NOT_SEND', 'NOT_RECEIVED', 'RECEIVED', SEEN  */
    last_message_created_at: new Date()
}
]
export default contact_data;
