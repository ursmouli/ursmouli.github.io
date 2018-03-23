var appNavJson = [
    {
        name: 'Home',
        link: './index.html'
    },
    {
        name: 'Testing',
        link: './unit-test.html'
    },
    {
        name: 'OSGi',
        link: './osgi.html'
    },
    {
        name: 'Spring',
        link: './spring.html'
    },
    {
        name: 'Hibernate',
        link: './hibernate.html'
    },
    {
        name: 'Examples',
        links: [
            {
                name: 'Registration Form',
                link: './registrationForm.html'
            }
        ]
    }
];

// process data
$(document).ready(function() {
    var $body = $('body');

    var navbarId = "navbarToggler"
    var $nav = $("<nav/>", {
        class: 'navbar navbar-expand-lg navbar-dark bg-dark' 
    });

    var $span = $("<span/>", {
        class: 'navbar-toggler-icon'
    });
    var $button = $("<button/>", {
        class: 'navbar-toggler',
        type: 'button',
        'data-toggle': 'collapse',
        'data-target': '#' + navbarId,
        'aria-controls': navbarId,
        'aria-expanded': 'false',
        'aria-label': 'Toggle navigation'
    }).append($span);
    $nav.append($button);

    var $navItems = $("<div/>", {
        id: 'navbarToggler',
        class: 'collapse navbar-collapse'
    });
    var $brand = $("<a/>", { class: 'navbar-brand', href: '#' }).text('WebDev');
    $navItems.append($brand);
    var $ul = $("<ul/>", { class: 'navbar-nav mr-auto mt-2 mt-lg-0' })
    $.each(appNavJson, function(index, item) {
        if (item.hasOwnProperty('links')) {
            var $anchorTitle = $("<a/>", {
                href: '#',
                class: 'nav-link dropdown-toggle',
                'data-toggle': 'dropdown',
                role: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': 'false',
                text: item.name
            });
            var $div = $("<div/>", { class: 'dropdown-menu' });
            $.each(item.links, function(linkIndex, linkItem) {
                $div.append($("<a/>", { class: 'dropdown-item', href: linkItem.link, text: linkItem.name}))
            });
            var $li = $("<li/>", { class: 'nav-item dropdown' });

            $li.append($anchorTitle);
            $li.append($div);

            $ul.append($li);
        } else {
            var $anchor = $("<a/>", {
                href: item.link,
                class: 'nav-link',
                text: item.name
            });

            var $li = $("<li/>", {
                class: 'nav-item'
            }).append($anchor);

            $ul.append($li);
        }
    });
    $navItems.append($ul);
    var $form = $("<form/>", { class: 'form-inline my-2 my-lg-0' });
    var $formInput = $("<input/>", { 
        class: 'form-control mr-sm-2',
        type: 'search',
        placeholder: 'Search',
        'aria-label': 'Search'
    });
    var $formButton = $("<button/>", {
        class: 'btn btn-outline-success my-2 my-sm-0',
        type: 'submit'
    }).text('Search');

    $form.append($formInput);
    $form.append($formButton);
    $navItems.append($form);

    $nav.append($navItems);

    $body.prepend($nav);
});