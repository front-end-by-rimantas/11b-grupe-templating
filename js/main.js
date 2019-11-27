const generateData = {
    services: [
        { name: 'Design', desc: 'Lorem ipsum dolor sit amet.' },
        { name: 'Development', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.' },
        { name: 'Chat', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto?' }
    ],
    blog: [
        { title: 'BLOG Design', photo: '#', desc: 'Lorem ipsum dolor sit amet.' },
        { title: 'BLOG Development', photo: '#', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.' },
        { title: 'BLOG Chat', photo: '#', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto?' }
    ],
    socials: [
        { icon: 'facebook', title: 'Facebook', link: '#' },
        { icon: 'twitter', title: 'Twitter', link: '#' },
        { icon: 'linkedin', title: 'Linkedin', ink: '#' },
        { icon: 'instagram', title: 'Instagram', link: '#' }
    ]
}

function render () {
    const sections = document.querySelectorAll('[data-generate="true"]');

    for ( let i=0; i<sections.length; i++ ) {
        const section = sections[i];
        const sectionID = section.getAttribute('id');
        const sectionData = generateData[sectionID];
        const sectionItemHTML = section.innerHTML;
        let itemHTML = '';
        
        let HTML = '';
        for ( let s=0; s<sectionData.length; s++ ) {
            const itemData = sectionData[s];
            // nuresetinu item'o HTML pavyzdi
            itemHTML = sectionItemHTML;

            // issitraukiu is itemData visu key
            const itemKeys = Object.keys(itemData);
            
            // repleisinu {{xyz}}  - su realia itemData.xyz reiksme
            for ( let k=0; k<itemKeys.length; k++ ) {
                const key = itemKeys[k];
                itemHTML = itemHTML.replace(`{{${key}}}`, itemData[key]);
            }


            // lipinu galutini itemHTML
            HTML += itemHTML;
        }
        section.innerHTML = HTML;
    }
}
render();