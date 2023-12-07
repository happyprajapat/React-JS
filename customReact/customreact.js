function customRender(elementToBeInjected,container)
{
    /*
    const domElement = document.createElement(elementToBeInjected.type)
    domElement.innerHTML = elementToBeInjected.children;
    domElement.setAttribute('href',elementToBeInjected.props.href)
    domElement.setAttribute('target',elementToBeInjected.props.target)

    container.appendChild(domElement);
    */

    const domElement = document.createElement(elementToBeInjected.type)
    domElement.innerHTML = elementToBeInjected.children

    for(const prop in elementToBeInjected.props) {
        domElement.setAttribute(prop,elementToBeInjected.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href:'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)