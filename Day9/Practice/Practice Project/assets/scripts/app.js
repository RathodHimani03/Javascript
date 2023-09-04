class DOMHelper {

    static clearEventListeners(element) {
        const cloneElement = element.cloneNode(true);
        element.replaceWith(cloneElement);
        return cloneElement;
    }
    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
        element.scrollIntoView({behavior:'smooth'});  //In scrolling new item will add it will show correctly 
    }
}


class Component {


    constructor(hostElementId, insertBefore = false) {

        if (hostElementId) {
            this.hasElement = document.getElementById(hostElementId);

        } else {
            this.hasElement = document.body;
        }

        this.insertBefore = insertBefore;
    }

    detach() {
        if (this.element) {

            this.element.remove();
            // this.element.parentElement.removeChild(this.element);
        }
    }

    attach() {
        this.hasElement.insertAdjacentElement(this.insertBefore ? 'afterbegin' : 'beforeend'
            , this.element)
    }
}

class Tooltip extends Component {
    constructor(closeNotifierFunction,text,hostElementId) {
        super(hostElementId);
        this.closeNotifier = closeNotifierFunction;
       this.text = text;
        this.create();
    }

    closeTooltip = () => {
        this.detach();
        this.closeNotifier();
    };

    create() {
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
       const tooltipTemplate = document.getElementById('tooltip');
       const tooltipBody = document.importNode(tooltipTemplate.content,true);
       tooltipBody.querySelector('p');
       tooltipElement.append(tooltipBody);
        // tooltipElement.textContent = this.text;

        const hostElPoslLeft = this.hasElement.offsetLeft;
        const hostElPosTop = this.hasElement.offsetTop;
        const hostElHeight = this.hasElement.clientHeight;
        const parentElementScrolling = this.hasElement.parentElement.scrollTop;

        const x = hostElPoslLeft+20;
        const y = hostElPosTop + hostElHeight -parentElementScrolling -10;

        tooltipElement.style.position = 'absolute';
        tooltipElement.style.left = x + 'px';
        tooltipElement.style.top = y + 'px'
        console.log(this.hasElement.getBoundingClientRect());
        tooltipElement.addEventListener('click', this.closeTooltip);
        this.element = tooltipElement;
    }

}

class ProjectItem {

    hasActiveTooltip = false;

    constructor(id, updateprojectListFunction, type) {

        this.id = id;
        this.updateProjectListHandler = updateprojectListFunction;
        this.connectMoreInToButton();
        this.connectSwitchButton(type)
    }

    showMoreInfoHandler() {
        if (this.hasActiveTooltip) {
            return;
        }

        const projectElement = document.getElementById(this.id);
        const tooltiptext = projectElement.dataset.extraInfo;
        const tooltip = new Tooltip(() => {
            this.hasActiveTooltip = false;
        },tooltiptext,this.id);
        tooltip.attach();
        this.hasActiveTooltip = true;
    }

    connectMoreInToButton() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this))
    }

    connectSwitchButton(type) {
        const PrijectItemElement = document.getElementById(this.id);
        let switchBtn = PrijectItemElement.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        switchBtn.textContent = type == 'active' ? "Finish" : "Active"
        switchBtn.addEventListener('click',
            this.updateProjectListHandler.bind(null, this.id))
    }

    update(updateProjectListFn, type) {
        this.updateProjectListHandler = updateProjectListFn;
        this.connectSwitchButton(type);
    }
}



class ProjectList {

    projects = [];

    //using callback function
    constructor(type) {

        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjItem of prjItems) {

            this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));

        }
        console.log(this.projects);

    }

    setSwitchHandlerFunction(switchHandlerFunction) {

        this.switchHandler = switchHandlerFunction;

    }
    addProject(project) {
        console.log(project);
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    };

    switchProject(projectId) {
        console.log(projectId);
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id != projectId);
    }
}

class App {

    //because of static we can call it without making object
    static init() {
        const activeProjectList = new ProjectList('active')
        const finishedProjectList = new ProjectList('finished')
        activeProjectList.setSwitchHandlerFunction(
            finishedProjectList.addProject.bind(finishedProjectList)
        );
        finishedProjectList.setSwitchHandlerFunction(
            activeProjectList.addProject.bind(activeProjectList)
        );


        //can create script like this dynamically
        
        const somescript = document.createElement('script');
        somescript.textContent = 'alert("Hi  there!")';
        document.head.append(somescript);
    };

}


App.init();

