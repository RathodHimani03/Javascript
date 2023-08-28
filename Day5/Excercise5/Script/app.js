//for new window

const newDiv = document.createElement('div');

const body = document.querySelector('body');

newDiv.textContent = "This is my Paragraph list";

body.append(newDiv);

const ul = document.createElement('ul')

newDiv.append(ul);

const addElement = () => {
    for (let i = 0; i < 3; i++) {

        const list = document.createElement('li');
        const Paragraph = document.createElement('p')
        Paragraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
            
        list.append(Paragraph);
        ul.append(list);

        switch (i) {

            case 0:
                list.style.color = 'pink'
                break;

            case 1:
                list.style.color = 'blue'
                break;

            case 2:
                list.style.color = 'orange'
                break;
        }
    }

}

addElement();



console.log(body);
