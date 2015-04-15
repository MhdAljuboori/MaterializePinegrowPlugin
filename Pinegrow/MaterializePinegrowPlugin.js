/*
Created by Mohammed Aljuboori for Pinegrow Web Editor
Licensed under MIT license
Feel free to use the code in your own Pinegrow plugins
Website http://mhdaljuboori.me
Twitter @MhdAljuboori
 */
$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("MaterializePinegrowPlugin", "Materialize");

        var navbar = new PgComponentType('materialize.navbar', 'Navbar');
        navbar.selector = '.navbar-container';
        navbar.parent_selector = 'body';
        navbar.preview_image = 'navbar.jpg';
        navbar.code = '<div class="navbar-container">\
          <nav>\
            <div class="nav-wrapper">\
              <a href="#" class="brand-logo">Logo</a>\
              <ul id="nav-mobile" class="right hide-on-med-and-down">\
                <li><a href="#">Sass</a></li>\
                <li><a href="#">Components</a></li>\
                <li><a href="#">JavaScript</a></li>\
              </ul>\
            </div>\
          </nav>\
        </div>';
        navbar.tags = 'major';
        navbar.sections = {
            'materialize.navbar' : {
                name : 'Navbar options',
                fields : {
                    'materialize.navbar.captionbck' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'navbar-fixed',
                        name: 'Fixed navbar'
                    }
                }
            }
        };
        f.addComponentType(navbar);


        var navbarLogo = new PgComponentType('materialize.navbar-logo', 'Logo');
        navbarLogo.selector = '.brand-logo';
        navbarLogo.parent_selector = '.nav-wrapper';
        //navbarLogo.preview_image = 'navbar.jpg';
        navbarLogo.code = '<a href="#" class="brand-logo">Logo</a>';
        navbarLogo.tags = 'major';
        navbarLogo.sections = {
            'materialize.navbar-logo' : {
                name : 'Navbar logo options',
                fields : {
                    'materialize.navbar-logo.align' : {
                        type : 'select',
                        action: 'apply_class',
                        show_empty: true,
                        name: 'Navbar logo align',
                        options: [
                            {key: 'right', name: "Right"},
                            {key: 'left', name: "Left"},
                            {key: 'center', name: "Center"}
                        ]
                    }
                }
            }
        };
        f.addComponentType(navbarLogo);


        var navMobile = new PgComponentType('materialize.navbar-list', 'Navbar List');
        navMobile.selector = '#nav-mobile';
        navMobile.parent_selector = '.nav-wrapper';
        //navMobile.preview_image = 'navbar.png';
        navMobile.code = '<ul id="nav-mobile" class="right hide-on-med-and-down">\
          <li><a href="#">Sass</a></li>\
          <li><a href="#">Components</a></li>\
          <li><a href="#">JavaScript</a></li>\
        </ul>';
        navMobile.tags = 'major';
        navMobile.sections = {
            'materialize.navbar-list' : {
                name : 'Navbar list options',
                fields : {
                    'materialize.navbar-list.align' : {
                        type : 'select',
                        action: 'apply_class',
                        name: 'Navbar List align',
                        options: [
                            {key: 'right', name: "Right"},
                            {key: 'left', name: "Left"}
                        ]
                    }
                }
            }
        };
        f.addComponentType(navMobile);


        var navMobileElement = new PgComponentType('materialize.navbar-list-element', 'Navbar List Element');
        navMobileElement.selector = '#nav-mobile > li';
        navMobileElement.parent_selector = '#nav-mobile';
        //navMobileElement.preview_image = 'navbar.png';
        navMobileElement.code = '<li><a href="#">Element</a></li>';
        navMobileElement.tags = 'major';
        navMobileElement.sections = {
            'materialize.navbar-list-element' : {
                name : 'Navbar Element options',
                fields : {
                    'materialize.navbar-list-element.align' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'active',
                        name: 'Active?'
                    }
                }
            }
        };
        f.addComponentType(navMobileElement);


        var searchBar = new PgComponentType('materialize.search-bar', 'Search Bar');
        searchBar.selector = 'form';
        searchBar.parent_selector = '.nav-wrapper';
        //searchBar.preview_image = 'navbar.png';
        searchBar.code = '<form>\
          <div class="input-field">\
            <input id="search" type="search" required>\
            <label for="search"><i class="mdi-action-search"></i></label>\
            <i class="mdi-navigation-close"></i>\
          </div>\
        </form>';
        searchBar.tags = 'major';
        f.addComponentType(searchBar);


        var collapseList = new PgComponentType('materialize.collapse-list', 'Collapse List');
        collapseList.selector = '.side-nav';
        collapseList.parent_selector = '.nav-wrapper';
        //collapseList.preview_image = 'navbar.png';
        collapseList.code = '<ul class="side-nav" id="mobile-demo">\
          <li><a href="#">Sass</a></li>\
          <li><a href="#">Components</a></li>\
          <li><a href="#">Javascript</a></li>\
          <li><a href="#">Mobile</a></li>\
        </ul>';
        collapseList.tags = 'major';
        f.addComponentType(collapseList);


        var collapseButton = new PgComponentType('materialize.collapse-button', 'Collapse Button');
        collapseButton.selector = '.button-collapse';
        collapseButton.parent_selector = '.nav-wrapper';
        //collapseButton.preview_image = 'navbar.png';
        collapseButton.code = '<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="mdi-navigation-menu"></i></a>';
        collapseButton.on_inserted = function() {
          alert('Add $(".button-collapse").sideNav(); to your $(document).ready');
        }
        collapseButton.tags = 'major';
        f.addComponentType(collapseButton);


        var collection = new PgComponentType('materialize.collection', 'Collection');
        collection.selector = '.collection';
        collection.parent_selector = 'body';
        //collection.preview_image = 'navbar.png';
        collection.code = '<ul class="collection">\
          <li class="collection-item">Alvin<span class="badge">1</span></li>\
          <li class="collection-item">Alvin</li>\
          <li class="collection-item">Alvin<span class="new badge">4</span></li>\
          <li class="collection-item">Alvin</li>\
        </ul>';
        collection.tags = 'major';
        collection.sections = {
            'materialize.collection' : {
                name : 'Collection options',
                fields : {
                    'materialize.collection.with-header' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'with-header',
                        name: 'With header?'
                    }
                }
            }
        };
        f.addComponentType(collection);


        var collectionItem = new PgComponentType('materialize.collection-item', 'Collection Item');
        collectionItem.selector = 'li.collection-item';
        collectionItem.parent_selector = '.collection';
        //collectionItem.preview_image = 'navbar.png';
        collectionItem.code = '<li class="collection-item">Alvin</li>';
        collectionItem.tags = 'major';
        collectionItem.sections = {
            'materialize.collection-item' : {
                name : 'Collection item options',
                fields : {
                    'materialize.collection-item.dismissable' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'dismissable',
                        name: 'Dismissable'
                    }
                }
            }
        };
        f.addComponentType(collectionItem);


        var linkCollectionItem = new PgComponentType('materialize.link-collection-item', 'Link Collection Item');
        linkCollectionItem.selector = 'a.collection-item';
        linkCollectionItem.parent_selector = '.collection';
        //linkCollectionItem.preview_image = 'navbar.png';
        linkCollectionItem.code = '<a href="#!" class="collection-item">Item</a>';
        linkCollectionItem.tags = 'major';
        linkCollectionItem.sections = {
            'materialize.link-collection-item' : {
                name : 'Collection item options',
                fields : {
                    'materialize.collection-item.dismissable' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'dismissable',
                        name: 'Dismissable'
                    }
                }
            }
        };
        f.addComponentType(linkCollectionItem);


        var avatarCollectionItem = new PgComponentType('materialize.avatar-collection-item', 'Avatar Collection Item');
        avatarCollectionItem.selector = '.collection-item.avatar';
        avatarCollectionItem.parent_selector = '.collection';
        //avatarCollectionItem.preview_image = 'navbar.png';
        avatarCollectionItem.code = '<li class="collection-item avatar">\
          <img src="images/yuna.jpg" alt="" class="circle">\
          <span class="title">Title</span>\
          <p>First Line <br>\
             Second Line\
          </p>\
          <a href="#!" class="secondary-content"><i class="mdi-action-grade"></i></a>\
        </li>';
        avatarCollectionItem.tags = 'major';
        f.addComponentType(avatarCollectionItem);


        var collectionHeader = new PgComponentType('materialize.collection-header-item', 'Collection Header Item');
        collectionHeader.selector = '.collection-header';
        collectionHeader.parent_selector = '.collection';
        //collectionHeader.preview_image = 'navbar.png';
        collectionHeader.code = '<li class="collection-header"><h4>Collection Header</h4></li>';
        collectionHeader.tags = 'major';
        f.addComponentType(collectionHeader);


        var collectionItemWithSecondary = new PgComponentType('materialize.collection-item-with-secondary', 'Collection Item With Secondary');
        collectionItemWithSecondary.selector = '.has-secondary';
        collectionItemWithSecondary.parent_selector = '.collection';
        //collectionItemWithSecondary.preview_image = 'navbar.png';
        collectionItemWithSecondary.code = '<li class="collection-item has-secondary"><div>Alvin<a href="#!" class="secondary-content"><i class="mdi-content-send"></i></a></div></li>';
        collectionItemWithSecondary.tags = 'major';
        f.addComponentType(collectionItemWithSecondary);


        var badge = new PgComponentType('materialize.badge', 'Badge');
        badge.selector = '.badge';
        badge.parent_selector = 'body';
        //badge.preview_image = 'navbar.png';
        badge.code = '<span class="badge">144</span>';
        badge.tags = 'major';
        badge.sections = {
            'materialize.badge' : {
                name : 'Badge Options',
                fields : {
                    'materialize.badge.shape' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'new',
                        name: 'New?'
                    }
                }
            }
        };
        f.addComponentType(badge);


        var button = new PgComponentType('materialize.button', 'Button');
        button.selector = 'a';
        button.parent_selector = 'body';
        //button.preview_image = 'navbar.png';
        button.code = '<a class="btn">Stuff</a>';
        button.tags = 'major';
        button.sections = {
            'materialize.button' : {
                name : 'Button Options',
                fields : {
                    'materialize.button.wavesEffect' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'waves-effect',
                        name: 'Wave Effect'
                    },
                    'materialize.button.wavesLight' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'waves-light',
                        name: 'Wave Light'
                    },
                    'materialize.button.floating' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'btn-floating',
                        name: 'Floating button'
                    },
                    'materialize.button.disabled' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'disabled',
                        name: 'Disabled button'
                    },
                    'materialize.button.type' : {
                        type : 'select',
                        action: 'apply_class',
                        name: 'Button Type',
                        show_empty: true,
                        options: [
                            {key: 'btn', name: "Regular"},
                            {key: 'btn-large', name: "Large"},
                            {key: 'btn-flat', name: "Flat"}
                        ]
                    }
                }
            }
        };
        f.addComponentType(button);


        var fixedActionButton = new PgComponentType('materialize.button', 'Fixed Action Button');
        fixedActionButton.selector = '.fixed-action-btn';
        fixedActionButton.parent_selector = 'body';
        //fixedActionButton.preview_image = 'navbar.png';
        fixedActionButton.code = '<div class="fixed-action-btn" style="bottom: 45px; right: 24px;">\
          <a class="btn-floating btn-large red">\
            <i class="large mdi-editor-mode-edit"></i>\
          </a>\
          <ul>\
            <li><a class="btn-floating red"><i class="large mdi-editor-insert-chart"></i></a></li>\
            <li><a class="btn-floating yellow darken-1"><i class="large mdi-editor-format-quote"></i></a></li>\
            <li><a class="btn-floating green"><i class="large mdi-editor-publish"></i></a></li>\
            <li><a class="btn-floating blue"><i class="large mdi-editor-attach-file"></i></a></li>\
          </ul>\
        </div>';
        fixedActionButton.tags = 'major';
        f.addComponentType(fixedActionButton);


        var dropdown = new PgComponentType('materialize.dropdown', 'Dropdown');
        dropdown.selector = '.dropdown-container';
        dropdown.parent_selector = 'body';
        //dropdown.preview_image = 'navbar.png';
        dropdown.code = '<div class="dropdown-container">\
          <a class="btn dropdown-button" href="#!" data-activates="dropdown2">Dropdown<i class="mdi-navigation-arrow-drop-down right"></i></a>\
          <ul id="dropdown2" class="dropdown-content">\
            <li><a href="#!">one<span class="badge">1</span></a></li>\
            <li><a href="#!">two<span class="new badge">1</span></a></li>\
            <li><a href="#!">three</a></li>\
          </ul>\
        </div>';
        dropdown.tags = 'major';
        dropdown.sections = {
            'materialize.dropDown' : {
                name : 'Dropdown Options',
                fields : {
                    'materialize.dropdown.dataActiates' : {
                        type : 'text',
                        name: 'Data Activate',
                        action: 'custom',
                        live_update: false,
                        get_value: function(obj) {
                            var $el = obj.data;
                            var pgdropcontent = new pgQuery($el.find('.dropdown-content'));
                            return pgdropcontent.attr('id');
                        },
                        set_value: function(obj, value, values, oldValue, eventType) {
                            var $el = obj.data;
                            var pgdropcontent = new pgQuery($el.find('.dropdown-content'));
                            var pgdropbutton = new pgQuery($el.find('.dropdown-button'));
                            pgdropcontent.attr('id', value);
                            pgdropbutton.attr('data-activates', value);
                            return value;
                        }
                    }
                }
            }
        };
        f.addComponentType(dropdown);


        var row = new PgComponentType('materialize.row', 'Row');
        row.selector = '.row';
        row.parent_selector = 'body';
        //row.preview_image = 'navbar.png';
        row.code = '<div class="row"></div>';
        row.tags = 'major';
        f.addComponentType(row);


        var row = new PgComponentType('materialize.row', 'Row');
        row.selector = '.row';
        row.parent_selector = 'body';
        //row.preview_image = 'navbar.png';
        row.code = '<div class="row"></div>';
        row.tags = 'major';
        f.addComponentType(row);


        var col = new PgComponentType('materialize.column', 'Column');
        col.selector = '.col';
        col.parent_selector = '.row';
        //col.preview_image = 'navbar.png';
        col.code = '<div class="col s12 m6"></div>';
        col.tags = 'major';
        f.addComponentType(col);


        var card = new PgComponentType('materialize.card', 'Card');
        card.selector = '.card';
        card.parent_selector = 'body';
        //card.preview_image = 'navbar.png';
        card.code = '<div class="card blue-grey darken-1">\
            <div class="card-content white-text">\
              <span class="card-title">Card Title</span>\
              <p>I am a very simple card. I am good at containing small bits of information.\
              I am convenient because I require little markup to use effectively.</p>\
            </div>\
            <div class="card-action">\
              <a href="#">This is a link</a>\
              <a href="#">This is a link</a>\
            </div>\
          </div>';
        card.tags = 'major';
        card.sections = {
            'materialize.card' : {
                name : 'Card options',
                fields : {
                    'materialize.card.size' : {
                        type : 'select',
                        action: 'apply_class',
                        name: 'Card',
                        show_empty: true,
                        options: [
                            {key: 'small', name: "Small"},
                            {key: 'medium', name: "Medium"},
                            {key: 'large', name: "Large"}
                        ]
                    }
                }
            }
        };
        f.addComponentType(card);


        var cardImageContainer = new PgComponentType('materialize.card-image-container', 'Card Image Container');
        cardImageContainer.selector = '.card-image';
        cardImageContainer.parent_selector = '.card';
        //cardImageContainer.preview_image = 'navbar.png';
        cardImageContainer.code = '<div class="card-image">\
          <img src="images/sample-1.jpg">\
          <span class="card-title">Card Title</span>\
        </div>';
        cardImageContainer.tags = 'major';
        cardImageContainer.sections = {
            'materialize.card-image-container' : {
                name : 'Card Image Container Options',
                fields : {
                    'materialize.card-image-container.wavesEffect' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'waves-effect',
                        name: 'Wave Effect'
                    },
                    'materialize.card-image-container.wavesLight' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'waves-light',
                        name: 'Wave Light'
                    },
                    'materialize.card-image-container.wavesBlock' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'waves-block',
                        name: 'Wave Block'
                    }
                }
            }
        };
        f.addComponentType(cardImageContainer);


        var cardImage = new PgComponentType('materialize.card-image', 'Card Image');
        cardImage.selector = '.card-image > img';
        cardImage.parent_selector = '.card-image';
        //cardImage.preview_image = 'navbar.png';
        cardImage.code = '<img src="images/sample-1.jpg">';
        cardImage.sections = {
            'materialize.card-image' : {
                name : 'Card Image Options',
                fields : {
                    'materialize.card-image.wavesEffect' : {
                        type : 'checkbox',
                        action: 'apply_class',
                        value: 'activator',
                        name: 'Activator?'
                    }
                }
            }
        };
        f.addComponentType(cardImage);


        var cardContent = new PgComponentType('materialize.card-content', 'Card Content');
        cardContent.selector = '.card-content';
        cardContent.parent_selector = '.card';
        //cardContent.preview_image = 'navbar.png';
        cardContent.code = '<div class="card-content white-text">\
          <span class="card-title">Card Title</span>\
          <p>I am a very simple card. I am good at containing small bits of information.\
          I am convenient because I require little markup to use effectively.</p>\
        </div>';
        cardContent.tags = 'major';
        f.addComponentType(cardContent);


        var cardAction = new PgComponentType('materialize.card-action', 'Card Content');
        cardAction.selector = '.card-action';
        cardAction.parent_selector = '.card';
        //cardAction.preview_image = 'navbar.png';
        cardAction.code = '<div class="card-action">\
          <a href="#">This is a link</a>\
          <a href="#">This is a link</a>\
        </div>';
        cardAction.tags = 'major';
        f.addComponentType(cardAction);


        var cardReveal = new PgComponentType('materialize.card-reveal', 'Card Reveal');
        cardReveal.selector = '.card-reveal';
        cardReveal.parent_selector = '.card';
        //cardReveal.preview_image = 'navbar.png';
        cardReveal.code = '<div class="card-reveal">\
          <span class="card-title grey-text text-darken-4">Card Title <i class="mdi-navigation-close right"></i></span>\
          <p>Here is some more information about this product that is only revealed once clicked on.</p>\
        </div>';
        cardReveal.tags = 'major';
        f.addComponentType(cardReveal);


        var cardPanel = new PgComponentType('materialize.card-panel', 'Card Panel');
        cardPanel.selector = '.card-panel';
        cardPanel.parent_selector = 'body';
        //cardPanel.preview_image = 'navbar.png';
        cardPanel.code = '<div class="card-panel teal">\
          <span class="white-text">I am a very simple card. I am good at containing small bits of information.\
          I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\
          </span>\
        </div>';
        cardPanel.tags = 'major';
        f.addComponentType(cardPanel);


        var footer = new PgComponentType('materialize.footer', 'Footer');
        footer.selector = '.page-footer';
        footer.parent_selector = 'body';
        //footer.preview_image = 'navbar.png';
        footer.code = '<footer class="page-footer">\
          <div class="container">\
            <div class="row">\
              <div class="col l6 s12">\
                <h5 class="white-text">Footer Content</h5>\
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>\
              </div>\
              <div class="col l4 offset-l2 s12">\
                <h5 class="white-text">Links</h5>\
                <ul>\
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>\
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>\
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>\
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>\
                </ul>\
              </div>\
            </div>\
          </div>\
          <div class="footer-copyright">\
            <div class="container">\
            © 2014 Copyright Text\
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>\
            </div>\
          </div>\
        </footer>';
        footer.tags = 'major';
        f.addComponentType(footer);


        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);

        var libsection = new PgFrameworkLibSection("MaterializePinegrowPlugin_lib", "Components");
        //Pass components in array
        libsection.setComponentTypes([navbar, navbarLogo, navMobile, searchBar, collapseList, collapseButton, collection, collectionItem, linkCollectionItem, avatarCollectionItem, collectionHeader, collectionItemWithSecondary, badge, dropdown, button, fixedActionButton, row, col, card, cardImageContainer, cardImage, cardContent, cardAction, cardReveal, cardPanel, footer]);

        f.addLibSection(libsection);
   });
});