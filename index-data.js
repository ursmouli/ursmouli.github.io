var indexDataJson = [
    {
        header: "Free Angular Deploy Online",
        body: [
            {
                title: 'Firebase',
                text: 'Can deploy freely with firebase generated URL',
                url: 'https://stackoverflow.com/questions/42573987/how-to-host-angular-2-website'
            }
        ]
    },
    {
        header: "Free Online static web hosting",
        body: [
            {
                title: 'netlify',
                text: 'Check website for detals',
                url: 'https://www.netlify.com'
            },
            {
                title: 'github pages',
                text: 'Check website for details',
                url: 'https://pages.github.com/'
            }
        ]
    },
    {
        header: "Free Online IDE",
        body: [
            {
                title: 'stackblitz.com',
                text: 'Can login using github',
                url: 'https://stackblitz.com'
            }
        ]
    }
];


$(document).ready(function() {
    var $container = $("div.container");
    var brk = "<br/>";
    $container.prepend(brk);
    $.each(indexDataJson, function(index, item) {
        var $card = $("<div/>", { class: 'card' });
        var $cardHeader = $("<div/>", { class: 'card-header', text: item.header });
        $card.prepend($cardHeader);
        $.each(item.body, function(bIndex, bItem) {
            var $cardBody = $("<div/>", { class: 'card-body' });

            var $cardBodyTitle = $("<h5/>", { class: 'card-title', text: bItem.title });
            var $cardBodyText = $("<p/>", { class: 'card-text', text: bItem.text });
            var $cardBodyLink = $("<a/>", { class: 'btn btn-primary', href: bItem.url, text: 'GoTo WebSite' });

            $cardBody.prepend($cardBodyTitle);
            $cardBody.append($cardBodyText);
            $cardBody.append($cardBodyLink);

            $card.append($cardBody);
        });
        $container.append($card);
    });

    $(".card").after(brk);
});