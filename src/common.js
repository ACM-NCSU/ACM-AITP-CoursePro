'use strict';


/**
    Helper function to assist with creating DOM elements
**/
function createElement(e, attrs) {
    var element = document.createElement(e);

    for (let item of attrs) {
        element.setAttribute(item[0], item[1]);
    }
    return element;
}

/**
    Add a link "CoursePro" to the side bar (Top) to go back to home page
    workspace.  ASSUMES there is a div with ID: "<page>-sidenav-top"
**/
function addSidebarTitle(page) {

    var sidebar_top = document.getElementById(page + '-sidenav-top');
    var title = createElement('a', [['href', 'javascript:openHome()'],
                                    ['class', 'title-sidenav sidenav-btn button']]);
    var title_txt = document.createTextNode('CoursePro');
        title.appendChild(title_txt);

    sidebar_top.appendChild(title);
    sidebar_top.appendChild(document.createElement('br'));
    sidebar_top.appendChild(document.createElement('br'));
}


/**
    Add a link to the side bar (bottom left corner) to go back and select different
    workspace.  ASSUMES there is a div with ID: "<page>-sidenav-bottom"
**/
function addSidebarSelectWS(page) {
    var sidebar_bottom = document.getElementById(page + '-sidenav-bottom');
    var selectWS = common.createElement('a', [['href', 'javascript:selectWS()'],
                                        ['class', 'item-sidenav sidenav-btn button']]);
    var selectWS_txt = document.createTextNode('Select Workspace');
        selectWS.appendChild(selectWS_txt);
    sidebar_bottom.appendChild(selectWS);
}

module.exports.createElement = createElement;
module.exports.addSidebarTitle = addSidebarTitle;
module.exports.addSidebarSelectWS = addSidebarSelectWS;
