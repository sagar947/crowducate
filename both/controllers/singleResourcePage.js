TestsingleResourcePageController = AppController.extend({
    data: {
        'title': 'Example content',
        'author': 'Illya Nziyev',
        'date': " 29 Tammi 2015",
        'content': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
        sections: [
            {
                "title": "Birds",
                "lessons": [
                    {
                        "title": "Nest building"
                    },
                    {
                        "title": "Feeding"
                    },
                    {
                        "title": "Flight"
                    }
                ]
            },
            {
                "title": "Bees",
                "lessons": [
                    {
                        "title": "Hive building"
                    },
                    {
                        "title": "Brood"
                    }
                ]
            }
        ]
    }
});
