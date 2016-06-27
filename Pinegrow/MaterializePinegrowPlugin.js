/*
Licensed under MIT license
 */
$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("mat0.97.5", "Materialize");

        f.type = "materialize";
        f.allow_single_type = true;
        f.info_badge = 'Updated';

        f.description = '<a href="http://materializecss.com/">Materialize</a> starting pages and components.';
        f.author = 'Pinegrow';
        f.author_link = 'http://pinegrow.com';

        f.has_actions = true;

        var actions = []; // Will be shown in ACT tab
        f.getActionTypes = function($el) {
            var r = [];
            for(var i = 0; i < actions.length; i++) {
                var def = actions[i];
                if( f.isType(def, $el)) {
                    r.push(def);
                }
            }
            return r;
        }


        //Load local CSS file + fonts so that plugin works in offline mode. Include only when needed.
        var materialize_icon_fonts_included = false;
        var includeMaterializeIconFontsIntoPGUI = function() {
            if(!materialize_icon_fonts_included) {
                // $('head').append('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
                $('head').append('<link href="' + f.getResourceUrl('resources/materializecss-icon.css') + '" rel="stylesheet">');
                materialize_icon_fonts_included = true;
            }
        }

        f.setScriptFileByScriptTagId('plugin-materialize-0-97-5'); //get url if script is included directly into edit.html

        //Don't show these files in CSS tab
        f.ignore_css_files = [/materialize/i];

        //Auto detect if font-awesome css is included
        f.detect = function(pgPage) {
          return pgPage.hasStylesheet(/materialize/i);
        }

        var num_columns = 12;

        var getPlaceholderImage = function() {
            return pinegrow.getPlaceholderImage();
        }

        var crsaAddStandardSections = function(addTo) {
            var matAlign = {
                'type' : 'select',
                'name' : 'Text align',
                'action' : 'apply_class',
                'show_empty' : true,
                'options' : [
                    { 'key' : 'left-align', 'name' : 'Left' },
                    { 'key' : 'center-align', 'name' : 'Center' },
                    { 'key' : 'right-align', 'name' : 'Right' }
                ]
            };

            var matVerAlgin = {
                'type': 'checkbox',
                'name': 'Vertical align',
                'action': 'custom',
                value: '1',
                get_value: function(obj) {
                    var $el = obj.data;
                    var pgel = new pgQuery($el);
                    var ppgel = new pgQuery($el.parent());
                    return pgel.hasClass('valign') && ppgel.hasClass('valign-wrapper') ? '1' : null;
                },
                set_value: function(obj, value, values, oldValue, eventType) {
                    var $el = obj.data;
                    var pgel = new pgQuery($el);
                    var ppgel = new pgQuery($el.parent());
                    if(value) {
                        pgel.addClass('valign');
                        ppgel.addClass('valign-wrapper');
                    } else {
                        pgel.removeClass('valign');
                        ppgel.removeClass('valign-wrapper');
                    }
                    return value;
                }
            };

            var matTextColor = {
                'type' : 'select',
                'name' : 'Text color',
                'action' : 'apply_class',
                'show_empty' : true,
                'options' : [
                    { key: 'red-text', name: "Red" },
                    { key: 'pink-text', name: "Pink" },
                    { key: 'purple-text', name: "Purple" },
                    { key: 'deep-purple-text', name: "Deep Purple" },
                    { key: 'indigo-text', name: "Indigo" },
                    { key: 'blue-text', name: "Blue" },
                    { key: 'light-blue-text', name: "Light Blue" },
                    { key: 'cyan-text', name: "Cyan" },
                    { key: 'teal-text', name: "Teal" },
                    { key: 'green-text', name: "Green" },
                    { key: 'light-green-text', name: "Light Green" },
                    { key: 'lime-text', name: "Lime" },
                    { key: 'yellow-text', name: "Yellow" },
                    { key: 'amber-text', name: "Amber" },
                    { key: 'orange-text', name: "Orange" },
                    { key: 'deep-orange-text', name: "Deep Orange" },
                    { key: 'brown-text', name: "Brown" },
                    { key: 'grey-text', name: "Grey" },
                    { key: 'blue-grey-text', name: "Blue Grey" },
                    { key: 'black-text', name: "Black" },
                    { key: 'white-text', name: "White" },
                    { key: 'transparent-text', name: "Transparent" }
                ]
            };

            var matTextColorDegree = {
                'type' : 'select',
                'name' : 'Text color degree',
                'action' : 'apply_class',
                'show_empty' : true,
                'options' : [
                    { key: 'text-lighten-5', name: "Lighten 5" },
                    { key: 'text-lighten-4', name: "Lighten 4" },
                    { key: 'text-lighten-3', name: "Lighten 3" },
                    { key: 'text-lighten-2', name: "Lighten 2" },
                    { key: 'text-lighten-1', name: "Lighten 1" },
                    { key: 'text-darken-1', name: "Darken 1" },
                    { key: 'text-darken-2', name: "Darken 2" },
                    { key: 'text-darken-3', name: "Darken 3" },
                    { key: 'text-darken-4', name: "Darken 4" },
                    { key: 'text-accent-1', name: "Accent 1" },
                    { key: 'text-accent-2', name: "Accent 2" },
                    { key: 'text-accent-3', name: "Accent 3" },
                    { key: 'text-accent-4', name: "Accent 4" }
                ]
            };

            var matBckColor = {
                'type' : 'select',
                'name' : 'Background color',
                'action' : 'apply_class',
                'show_empty' : true,
                'options' : [
                    { key: 'red', name: "Red" },
                    { key: 'pink', name: "Pink" },
                    { key: 'purple', name: "Purple" },
                    { key: 'deep-purple', name: "Deep Purple" },
                    { key: 'indigo', name: "Indigo" },
                    { key: 'blue', name: "Blue" },
                    { key: 'light-blue', name: "Light Blue" },
                    { key: 'cyan', name: "Cyan" },
                    { key: 'teal', name: "Teal" },
                    { key: 'green', name: "Green" },
                    { key: 'light-green', name: "Light Green" },
                    { key: 'lime', name: "Lime" },
                    { key: 'yellow', name: "Yellow" },
                    { key: 'amber', name: "Amber" },
                    { key: 'orange', name: "Orange" },
                    { key: 'deep-orange', name: "Deep Orange" },
                    { key: 'brown', name: "Brown" },
                    { key: 'grey', name: "Grey" },
                    { key: 'blue-grey', name: "Blue Grey" },
                    { key: 'black', name: "Black" },
                    { key: 'white', name: "White" },
                    { key: 'transparent', name: "Transparent" }
                ]
            };

            var matBckColorDegree = {
                'type' : 'select',
                'name' : 'Background color degree',
                'action' : 'apply_class',
                'show_empty' : true,
                'options' : [
                    { key: 'lighten-5', name: "Lighten 5" },
                    { key: 'lighten-4', name: "Lighten 4" },
                    { key: 'lighten-3', name: "Lighten 3" },
                    { key: 'lighten-2', name: "Lighten 2" },
                    { key: 'lighten-1', name: "Lighten 1" },
                    { key: 'darken-1', name: "Darken 1" },
                    { key: 'darken-2', name: "Darken 2" },
                    { key: 'darken-3', name: "Darken 3" },
                    { key: 'darken-4', name: "Darken 4" },
                    { key: 'accent-1', name: "Accent 1" },
                    { key: 'accent-2', name: "Accent 2" },
                    { key: 'accent-3', name: "Accent 3" },
                    { key: 'accent-4', name: "Accent 4" }
                ]
            };

            var matShadow = {
                type : 'select',
                action: 'apply_class',
                show_empty: true,
                name: 'Shadow',
                options: [
                    { key: 'z-depth-1', name: "Z Depth 1" },
                    { key: 'z-depth-2', name: "Z Depth 2" },
                    { key: 'z-depth-3', name: "Z Depth 3" },
                    { key: 'z-depth-4', name: "Z Depth 4" },
                    { key: 'z-depth-5', name: "Z Depth 5" }
                ]
            }

            var matFlow = {
                'type': 'checkbox',
                'name': 'Flow text',
                'action': 'apply_class',
                'value': 'flow-text'
            };

            var matTruncate = {
                'type': 'checkbox',
                'name': 'Truncate',
                'action': 'apply_class',
                'value': 'truncate'
            }

            var rules_section = {
                name : 'CSS Rules',
                fields : {
                    'rules' : {
                        'type' : 'rules',
                        'name' : null,
                        'action' : 'rules'
                    }
                }
            };

            var s = {
                'mattext' : {
                    name: 'Text &amp; Context',
                    fields: {
                        'mattextalign': matAlign,
                        'matveralign': matVerAlgin,
                        'matcolor': matTextColor,
                        'matcolordegree': matTextColorDegree,
                        'matbckcolor': matBckColor,
                        'matbckcolordegree': matBckColorDegree,
                        'matshadow': matShadow,
                        'matflow': matFlow,
                        'mattruncate': matTruncate
                    }
                },
                'matlayout' : {
                    name: 'Layout',
                    fields: {
                        matfloat : {
                            'type' : 'select',
                            'name' : 'Pull',
                            'action' : 'apply_class',
                            'show_empty' : true,
                            'options' : [
                                { 'key' : 'left', 'name' : 'Left' },
                                { 'key' : 'right', 'name' : 'Right' }
                            ]
                        }
                    }
                },
                'mateffects': {
                    'name': 'Effects',
                    'fields': {
                        'mathoverable' : {
                            type : 'checkbox',
                            action: 'apply_class',
                            value: 'hoverable',
                            name: 'Hoverable'
                        },
                        'matwaveseffect' : {
                            type : 'checkbox',
                            action: 'apply_class',
                            value: 'waves-effect',
                            name: 'Wave Effect'
                        },
                        'matwavescircle' : {
                            type : 'checkbox',
                            action: 'apply_class',
                            value: 'waves-circle',
                            name: 'Wave Circle'
                        },
                        'matwavescolor' : {
                            type : 'select',
                            name: 'Wave Color',
                            action: 'apply_class',
                            show_empty: true,
                            options: [
                                {key: 'waves-light', name: 'Light'},
                                {key: 'waves-red', name: 'Red'},
                                {key: 'waves-yellow', name: 'Yellow'},
                                {key: 'waves-orange', name: 'Orange'},
                                {key: 'waves-purple', name: 'Purple'},
                                {key: 'waves-green', name: 'Green'},
                                {key: 'waves-teal', name: 'Teal'}
                            ]
                        }
                    }
                },
                'matvisible' : {
                    name: 'Visibility',
                    fields: {
                        matvisibiityhide : {
                            'type' : 'select',
                            'name' : 'Hide',
                            'action' : 'apply_class',
                            'show_empty' : true,
                            'options' : [
                                { 'key' : 'hide', 'name' : 'Hidden for all Devices' },
                                { 'key' : 'hide-on-small-only', 'name' : 'Hidden for Mobile Only' },
                                { 'key' : 'hide-on-med-only', 'name' : 'Hidden for Tablet Only' },
                                { 'key' : 'hide-on-med-and-down', 'name' : 'Hidden for Tablet and Below' },
                                { 'key' : 'hide-on-med-and-up', 'name' : 'Hidden for Tablet and Above' },
                                { 'key' : 'hide-on-large-only', 'name' : 'Hidden for Desktop Only' }
                            ]
                        },
                        matvisibiityshow: {
                            'type' : 'select',
                            'name' : 'Show',
                            'action' : 'apply_class',
                            'show_empty' : true,
                            'options' : [
                                { 'key' : 'show-on-small', 'name' : 'Shown for Mobile' },
                                { 'key' : 'show-on-medium', 'name' : 'Shown for Tablet' },
                                { 'key' : 'show-on-medium-and-down', 'name' : 'Shown for Tablet and Below' },
                                { 'key' : 'show-on-medium-and-up', 'name' : 'Shown for Tablet and Above' },
                                { 'key' : 'show-on-large', 'name' : 'Shown for Desktop' }
                            ]
                        }
                    }
                },
                'matjavascript' : {
                    name: 'Javascript',
                    fields: {
                        'matactivator' : {
                            type : 'checkbox',
                            action: 'apply_class',
                            value: 'activator',
                            name: 'Activator'
                        },
                        'mattooltipped' : {
                            type : 'checkbox',
                            action: 'apply_class',
                            value: 'tooltipped',
                            name: 'Tooltip'
                        },
                        'matboxed' : {
                            type : 'checkbox',
                            action: 'apply_class',
                            value: 'materialboxed',
                            name: 'Material Boxed'
                        }
                    }
                }
            };

            var before = {
                css : {
                    //inherit this from html framework
                    inherit: true
                }
            }

            var list = {};

            $.each(addTo, function(k,v) {
                list[k] = v;
            });

            $.each(before, function(k,v) {
                list[k] = v;
            });



            $.each(s, function(k,v) {
                list[k] = v;
            });
            return list;
        }

        var getTablePreviewCode = function(t) {
            return '<table class="table preview-' + t + '">\
                <thead>\
                    <tr>\
                        <th>#</th>\
                        <th>First Name</th>\
                        <th>Last Name</th>\
                        <th>Username</th>\
                    </tr>\
                </thead>\
                <tbody>\
                    <tr class="sel">\
                        <td>1</td>\
                        <td class="sel">Mark</td>\
                        <td>Otto</td>\
                        <td>@mdo</td>\
                    </tr>\
                    <tr>\
                        <td>2</td>\
                        <td>Jacob</td>\
                        <td>Thornton</td>\
                        <td>@fat</td>\
                    </tr>\
                    <tr>\
                        <td>3</td>\
                        <td>Larry</td>\
                        <td>the Bird</td>\
                        <td>@twitter</td>\
                    </tr>\
                </tbody>\
            </table>';
        }

        var showOrbitMessage = function() {
            crsaQuickMessage('Refresh the page (Page -&gt; Refresh / CMD + R) to activate changes.', 2000, true);
        }

        // Grid
            // Container
            f.addComponentType({
                'type': 'mat-container',
                'name': 'Container',
                'selector': '.container',
                'tags': 'major',
                'empty_placeholder': true,
                'inline_edit': true,
                'code': '<div class="container"></div>',
                'sections': crsaAddStandardSections({}),
                'action_menu': {
                    add: ['mat-row']
                }
            });

            // Row
            f.addComponentType({
                'type': 'mat-row',
                'name': 'Row',
                'selector': '.row',
                'tags': 'major',
                'empty_placeholder': true,
                'inline_edit': true,
                'code': '<div class="row"></div>',
                'sections': crsaAddStandardSections({}),
                'action_menu': {
                    add: ['mat-column']
                }
            });

            //Columns
            var createColumnSpans = function(name, base, empty, start) {
                if(typeof start == 'undefined') start = 1;
                var span_select = {
                    'type' : 'select',
                    'name' : null,
                    'action' : 'apply_class',
                    'show_empty' : empty,
                    'options' : []
                }
                for(var n = start; n <= num_columns; n++) {
                    span_select.options.push({key: base + n, name: n});
                }
                return span_select;
            }

            f.addComponentType({
                'type': 'mat-column',
                'name': 'Column',
                'selector': '.col',
                'parent_selector': '.row',
                'tags': 'major',
                'empty_placeholder': true,
                'inline_edit': true,
                'code': '<div class="col s12 m4 l4">\
                    <h3>Column title</h3>\
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\
                </div>',
                'sections': crsaAddStandardSections({
                    layout : {
                        name : "Layout",
                        fields : {
                            layout_control: {
                                type: 'custom',
                                name: 'layout_control',
                                action: 'none',
                                show: function($dest, obj, fn, fdef, values, $scrollParent) {
                                    var sizes = ["s", "m", "l"];
                                    var fields = ["", "offset-", "push-", "pull-"];
                                    var field_names = ["Span&nbsp;", "Offs&nbsp;", "Push&nbsp;", "Pull&nbsp;"];
                                    var field_keys = ["span_", "offset_", "push_", "pull_"];
                                    var $table = $("<table/>", {class: 'grid-control columns-control'}).appendTo($dest);
                                    var $row = $("<tr/>").html("<td></td><td><label>S</label></td><td><label>M</label></td><td><label>L</label></td>").appendTo($table);

                                    for(var n = 0; n < fields.length; n++) {
                                        $row = $("<tr/>").appendTo($table);
                                        var $td = $("<td/>").html('<label>' + field_names[n] + '</label>').appendTo($row);
                                        for(var m = 0; m < sizes.length; m++) {
                                            $td = $("<td/>").appendTo($row);

                                            var field = field_keys[n] + sizes[m];
                                            $.fn.crsa("addInputField", $td, obj, field, createColumnSpans(field_names[n], fields[n] + sizes[m], true, fields[n] == '' ? 1 : 0), values, false, $scrollParent);
                                        }
                                    }
                                }
                            }
                        }
                    },
                    layout_phone : {
                        name : 'Phone',
                        show : false,
                        fields : {
                            span_s : createColumnSpans("Span", "s", true),
                            offset_s : createColumnSpans("Offs", "s-offset", true, 0),
                            push_s : createColumnSpans("Push", "s-push", true, 0),
                            pull_s : createColumnSpans("Pull", "s-pull", true, 0),
                            span_m : createColumnSpans("Span", "m", true),
                            offset_m : createColumnSpans("Offs", "m-offset", true, 0),
                            push_m : createColumnSpans("Push", "m-push", true, 0),
                            pull_m : createColumnSpans("Pull", "m-pull", true, 0),
                            span_l : createColumnSpans("Span", "l", true),
                            offset_l : createColumnSpans("Offs", "l-offset", true, 0),
                            push_l : createColumnSpans("Push", "l-push", true, 0),
                            pull_l : createColumnSpans("Pull", "l-pull", true, 0)
                        }
                    }
                })
            });

        // Tables
            //Table
            f.addComponentType({
                'type': 'mat-table',
                'name': 'Table',
                'selector': 'table',
                'tags': 'major',
                'preview_image': 'table.png',
                'code': '<table>\
                    <thead>\
                        <tr>\
                            <th data-field="id">Name</th>\
                            <th data-field="name">Item Name</th>\
                            <th data-field="price">Item Price</th>\
                        </tr>\
                    </thead>\
                    <tbody>\
                        <tr>\
                            <td>Alvin</td>\
                            <td>Eclair</td>\
                            <td>$0.87</td>\
                        </tr>\
                        <tr>\
                            <td>Alan</td>\
                            <td>Jellybean</td>\
                            <td>$3.76</td>\
                        </tr>\
                        <tr>\
                            <td>Jonathan</td>\
                            <td>Lollipop</td>\
                            <td>$7.00</td>\
                        </tr>\
                    </tbody>\
                </table>',
                'sections': crsaAddStandardSections({
                    'mattableoption' : {
                        'name': 'Table options',
                        'fields': {
                            'materialize.table.type' : {
                                'type': 'select',
                                'name': 'Table type',
                                'action': 'apply_class',
                                'show_empty': true,
                                options: [
                                    { key: 'bordered', name: "Bordered" },
                                    { key: 'striped', name: "Striped" },
                                    { key: 'hoverable', name: "Hoverable" },
                                    { key: 'centered', name: "Centered" },
                                    { key: 'responsive-table', name: "Responsive Table" }
                                ]
                            }
                        }
                    }
                })
            });

            // Table heading
            f.addComponentType({
                'type': 'mat-thead',
                'selector': 'thead',
                'parent_selector': 'table',
                'code': '<thead><tr><td></td></tr></thead>',
                'preview': getTablePreviewCode('thead'),
                'name': 'Table heading',
                'sections': crsaAddStandardSections({})
            });

            // Table body
            f.addComponentType({
                'type' : 'mat-tbody',
                'selector' : 'tbody',
                'parent_selector': 'table',
                'code' : '<tbody><tr><td></td></tr></tbody>',
                'preview': getTablePreviewCode('tbody'),
                'name' : 'Table body',
                'sections' : crsaAddStandardSections({})
            });

            // Table row
            f.addComponentType({
                'type': 'mat-tr',
                'selector' : 'tr',
                'name': 'Table row',
                'parent_selector': 'table,tbody,thead,tfooter',
                'code': '<tr><td></td></tr>',
                'preview': getTablePreviewCode('tr'),
                'sections': crsaAddStandardSections({})
            });

            // Table cell
            f.addComponentType({
                'type': 'mat-td',
                'selector': 'td',
                'name': 'Table cell',
                'parent_selector': 'tr',
                'code': '<td></td>',
                'preview': getTablePreviewCode('td'),
                'sections': crsaAddStandardSections({})
            });

        // Buttons
            // Button
            f.addComponentType({
                'type': 'mat-button',
                'selector': '.btn,.btn-large,.btn-flat,.btn-floating',
                'name': 'Button',
                'tags': 'major',
                'code': '<a class="btn">Button</a>',
                'sections': crsaAddStandardSections({
                    'matbutton' : {
                        'name': 'Button Options',
                        'fields': {
                            'matbuttonwaveseffect' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'waves-effect',
                                name: 'Wave Effect'
                            },
                            'matbuttonwavescircle' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'waves-circle',
                                name: 'Wave Circle'
                            },
                            'matbuttonwavescolor' : {
                                type : 'select',
                                name: 'Wave Color',
                                action: 'apply_class',
                                show_empty: true,
                                options: [
                                    {key: 'waves-light', name: 'Light'},
                                    {key: 'waves-red', name: 'Red'},
                                    {key: 'waves-yellow', name: 'Yellow'},
                                    {key: 'waves-orange', name: 'Orange'},
                                    {key: 'waves-purple', name: 'Purple'},
                                    {key: 'waves-green', name: 'Green'},
                                    {key: 'waves-teal', name: 'Teal'}
                                ]
                            },
                            'matbuttonfloating' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'btn-floating',
                                name: 'Floating button'
                            },
                            'matbuttondisabled' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'disabled',
                                name: 'Disabled button'
                            },
                            'matbuttontype' : {
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
                }),
                'action_menu': {
                    add: ['mat-icon']
                }
            });

            // Fixed action button
            f.addComponentType({
                'type': 'mat-fixed-button',
                'selector': '.fixed-action-btn',
                'name': 'Fixed Action Button',
                'tags': 'major',
                'preview_image': 'fixedActionButton.png',
                'code': '<div class="fixed-action-btn" style="bottom: 45px; right: 24px;">\
                    <a class="btn-floating btn-large red">\
                        <i class="large mdi-editor-mode-edit"></i>\
                    </a>\
                    <ul>\
                        <li><a class="btn-floating red"><i class="large mdi-editor-insert-chart"></i></a></li>\
                        <li><a class="btn-floating yellow darken-1"><i class="large mdi-editor-format-quote"></i></a></li>\
                        <li><a class="btn-floating green"><i class="large mdi-editor-publish"></i></a></li>\
                        <li><a class="btn-floating blue"><i class="large mdi-editor-attach-file"></i></a></li>\
                    </ul>\
                </div>',
                'sections': crsaAddStandardSections({
                    'matfixedbutton': {
                        'name': 'Fixed button options',
                        'fields': {
                            'matfixedbuttonhorizontal': {
                                'type': 'checkbox',
                                'name': 'Horizontal',
                                'value': 'horizontal',
                                'action': 'apply_class'
                            },
                            'matfixedbuttonclicktotoggle': {
                                'type': 'checkbox',
                                'name': 'Click to toggle',
                                'value': 'click-to-toggle',
                                'action': 'apply_class'
                            }
                        }
                    }
                }),
                'action_menu': {
                    add: ['mat-button', 'ul-html']
                }
            })

        // Typo
            var hoptions = [
                {key: 'h1', name: 'Heading 1'},
                {key: 'h2', name: 'Heading 2'},
                {key: 'h3', name: 'Heading 3'},
                {key: 'h4', name: 'Heading 4'},
                {key: 'h5', name: 'Heading 5'},
                {key: 'h6', name: 'Heading 6'}
            ];

            var headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
            $.each(headings, function(i,h) {
                var hdef = {
                    'type' : h,
                    'selector' : h,
                    'code' : '<' + h + '>Heading ' + (i+1) + '</' + h + '>',
                    'name' : h,
                    action_menu: {
                        add: ['small']
                    },
                    'sections' : crsaAddStandardSections({
                        'style' : {
                            name : 'Heading',
                            fields : {
                                description : {
                                    'type' : 'select',
                                    'name' : 'Level',
                                    'action' : 'custom',
                                    'show_empty' : false,
                                    options: hoptions,
                                    get_value: function(obj) {
                                        var $el = obj.data;
                                        var pgel = new pgQuery($el);
                                        for(var i = 0; i < hoptions.length; i++) {
                                            if($el.is(hoptions[i].key)) {
                                                return hoptions[i].key;
                                            }
                                        }
                                        return null;
                                    },
                                    set_value: function(obj, value, values, oldValue, eventType) {
                                        crsaWillChangeDom();
                                        var $el = obj.data;
                                        var pgel = new pgQuery($el);
                                        var $p = $el.parent();
                                        //var $newel = replaceTag($el, value);
                                        var newpgel = pgel.replaceTag(value);
                                        var $newel = $(newpgel.get(0).el);
                                        obj.data = $newel;
                                        $.fn.crsa('setNeedsUpdate', false, $p);
                                        $.fn.crsa('setSelectElementOnUpdate', $newel);
                                        return value;
                                    }
                                }
                            }
                        }
                    })
                }
                f.addComponentType(hdef);
            });

            f.addComponentType({
                'type' : 'img',
                'selector' : 'img',
                'code' : function() {
                    return '<img src="' + getPlaceholderImage() + '" width="200"/>'
                },
                'name' : 'Image',
                'sections' : crsaAddStandardSections({
                    'image' : {
                        name : 'Image',
                        fields : {
                            'src' : {name : 'Url', type : 'image', action: 'element_attribute', attribute: 'src'},
                            'alt' : {name : 'Alt', type : 'text', action: 'element_attribute', attribute: 'alt'},
                            'width' : {name : 'Width', type : 'text', action: 'element_attribute', attribute: 'width'},
                            'height' : {name : 'Height', type : 'text', action: 'element_attribute', attribute: 'height'},
                            'circle' : {
                                'type' : 'checkbox',
                                'name' : 'Circle',
                                'action' : 'apply_class',
                                'value' : 'circle'
                            },
                            responsive : {
                                type: 'checkbox',
                                name: 'Responsive',
                                action: 'apply_class',
                                value: 'responsive-img'
                            }
                        }
                    }
                })
            });

            f.addComponentType({
                'type': 'mat-video-container',
                'name': 'Video container',
                'selector': '.video-container',
                'empty_placeholder': true,
                'code': '<div class="video-container"></div>'
            });

            f.addComponentType({
                'type': 'mat-responsive-video',
                'name': 'Responsive video',
                'selector': '.video-container',
                'drag_helper': '<div class="pg-empty-placeholder">Video container</div>',
                'empty_placeholder': true,
                'code': '<video class="responsive-video" controls>\
                    <source src="movie.mp4" type="video/mp4">\
                </video>'
            });

            // Icon
            var icons = ['mdi-action-3d-rotation', 'mdi-action-accessibility', 'mdi-action-account-balance', 'mdi-action-account-balance-wallet', 'mdi-action-account-box', 'mdi-action-account-child', 'mdi-action-account-circle', 'mdi-action-add-shopping-cart', 'mdi-action-alarm', 'mdi-action-alarm-add', 'mdi-action-alarm-off', 'mdi-action-alarm-on', 'mdi-action-android', 'mdi-action-announcement', 'mdi-action-aspect-ratio', 'mdi-action-assessment', 'mdi-action-assignment', 'mdi-action-assignment-ind', 'mdi-action-assignment-late', 'mdi-action-assignment-return', 'mdi-action-assignment-returned', 'mdi-action-assignment-turned-in', 'mdi-action-autorenew', 'mdi-action-backup', 'mdi-action-book', 'mdi-action-bookmark', 'mdi-action-bookmark-outline', 'mdi-action-bug-report', 'mdi-action-cached', 'mdi-action-class', 'mdi-action-credit-card', 'mdi-action-dashboard', 'mdi-action-delete', 'mdi-action-description', 'mdi-action-dns', 'mdi-action-done', 'mdi-action-done-all', 'mdi-action-event', 'mdi-action-exit-to-app', 'mdi-action-explore', 'mdi-action-extension', 'mdi-action-face-unlock', 'mdi-action-favorite', 'mdi-action-favorite-outline', 'mdi-action-find-in-page', 'mdi-action-find-replace', 'mdi-action-flip-to-back', 'mdi-action-flip-to-front', 'mdi-action-get-app', 'mdi-action-grade', 'mdi-action-group-work', 'mdi-action-help', 'mdi-action-highlight-remove', 'mdi-action-history', 'mdi-action-home', 'mdi-action-https', 'mdi-action-info', 'mdi-action-info-outline', 'mdi-action-input', 'mdi-action-invert-colors', 'mdi-action-label', 'mdi-action-label-outline', 'mdi-action-language', 'mdi-action-launch', 'mdi-action-list', 'mdi-action-lock', 'mdi-action-lock-open', 'mdi-action-lock-outline', 'mdi-action-loyalty', 'mdi-action-markunread-mailbox', 'mdi-action-note-add', 'mdi-action-open-in-browser', 'mdi-action-open-in-new', 'mdi-action-open-with', 'mdi-action-pageview', 'mdi-action-payment', 'mdi-action-perm-camera-mic', 'mdi-action-perm-contact-cal', 'mdi-action-perm-data-setting', 'mdi-action-perm-device-info', 'mdi-action-perm-identity', 'mdi-action-perm-media', 'mdi-action-perm-phone-msg', 'mdi-action-perm-scan-wifi', 'mdi-action-picture-in-picture', 'mdi-action-polymer', 'mdi-action-print', 'mdi-action-query-builder', 'mdi-action-question-answer', 'mdi-action-receipt', 'mdi-action-redeem', 'mdi-action-report-problem', 'mdi-action-restore', 'mdi-action-room', 'mdi-action-schedule', 'mdi-action-search', 'mdi-action-settings', 'mdi-action-settings-applications', 'mdi-action-settings-backup-restore', 'mdi-action-settings-bluetooth', 'mdi-action-settings-cell', 'mdi-action-settings-display', 'mdi-action-settings-ethernet', 'mdi-action-settings-input-antenna', 'mdi-action-settings-input-component', 'mdi-action-settings-input-composite', 'mdi-action-settings-input-hdmi', 'mdi-action-settings-input-svideo', 'mdi-action-settings-overscan', 'mdi-action-settings-phone', 'mdi-action-settings-power', 'mdi-action-settings-remote', 'mdi-action-settings-voice', 'mdi-action-shop', 'mdi-action-shop-two', 'mdi-action-shopping-basket', 'mdi-action-shopping-cart', 'mdi-action-speaker-notes', 'mdi-action-spellcheck', 'mdi-action-star-rate', 'mdi-action-stars', 'mdi-action-store', 'mdi-action-subject', 'mdi-action-swap-horiz', 'mdi-action-swap-vert', 'mdi-action-swap-vert-circle', 'mdi-action-system-update-tv', 'mdi-action-tab', 'mdi-action-tab-unselected', 'mdi-action-theaters', 'mdi-action-thumb-down', 'mdi-action-thumb-up', 'mdi-action-thumbs-up-down', 'mdi-action-toc', 'mdi-action-today', 'mdi-action-track-changes', 'mdi-action-translate', 'mdi-action-trending-down', 'mdi-action-trending-neutral', 'mdi-action-trending-up', 'mdi-action-turned-in', 'mdi-action-turned-in-not', 'mdi-action-verified-user', 'mdi-action-view-agenda', 'mdi-action-view-array', 'mdi-action-view-carousel', 'mdi-action-view-column', 'mdi-action-view-day', 'mdi-action-view-headline', 'mdi-action-view-list', 'mdi-action-view-module', 'mdi-action-view-quilt', 'mdi-action-view-stream', 'mdi-action-view-week', 'mdi-action-visibility', 'mdi-action-visibility-off', 'mdi-action-wallet-giftcard', 'mdi-action-wallet-membership', 'mdi-action-wallet-travel', 'mdi-action-work', 'mdi-alert-error', 'mdi-alert-warning', 'mdi-av-album', 'mdi-av-timer', 'mdi-av-closed-caption', 'mdi-av-equalizer', 'mdi-av-explicit', 'mdi-av-fast-forward', 'mdi-av-fast-rewind', 'mdi-av-games', 'mdi-av-hearing', 'mdi-av-high-quality', 'mdi-av-loop', 'mdi-av-mic', 'mdi-av-mic-none', 'mdi-av-mic-off', 'mdi-av-movie', 'mdi-av-my-library-add', 'mdi-av-my-library-books', 'mdi-av-my-library-music', 'mdi-av-new-releases', 'mdi-av-not-interested', 'mdi-av-pause', 'mdi-av-pause-circle-fill', 'mdi-av-pause-circle-outline', 'mdi-av-play-arrow', 'mdi-av-play-circle-fill', 'mdi-av-play-circle-outline', 'mdi-av-play-shopping-bag', 'mdi-av-playlist-add', 'mdi-av-queue', 'mdi-av-queue-music', 'mdi-av-radio', 'mdi-av-recent-actors', 'mdi-av-repeat', 'mdi-av-repeat-one', 'mdi-av-replay', 'mdi-av-shuffle', 'mdi-av-skip-next', 'mdi-av-skip-previous', 'mdi-av-snooze', 'mdi-av-stop', 'mdi-av-subtitles', 'mdi-av-surround-sound', 'mdi-av-video-collection', 'mdi-av-videocam', 'mdi-av-videocam-off', 'mdi-av-volume-down', 'mdi-av-volume-mute', 'mdi-av-volume-off', 'mdi-av-volume-up', 'mdi-av-web', 'mdi-communication-business', 'mdi-communication-call', 'mdi-communication-call-end', 'mdi-communication-call-made', 'mdi-communication-call-merge', 'mdi-communication-call-missed', 'mdi-communication-call-received', 'mdi-communication-call-split', 'mdi-communication-chat', 'mdi-communication-clear-all', 'mdi-communication-comment', 'mdi-communication-contacts', 'mdi-communication-dialer-sip', 'mdi-communication-dialpad', 'mdi-communication-dnd-on', 'mdi-communication-email', 'mdi-communication-forum', 'mdi-communication-import-export', 'mdi-communication-invert-colors-off', 'mdi-communication-invert-colors-on', 'mdi-communication-live-help', 'mdi-communication-location-off', 'mdi-communication-location-on', 'mdi-communication-message', 'mdi-communication-messenger', 'mdi-communication-no-sim', 'mdi-communication-phone', 'mdi-communication-portable-wifi-off', 'mdi-communication-quick-contacts-dialer', 'mdi-communication-quick-contacts-mail', 'mdi-communication-ring-volume', 'mdi-communication-stay-current-landscape', 'mdi-communication-stay-current-portrait', 'mdi-communication-stay-primary-landscape', 'mdi-communication-stay-primary-portrait', 'mdi-communication-swap-calls', 'mdi-communication-textsms', 'mdi-communication-voicemail', 'mdi-communication-vpn-key', 'mdi-content-add', 'mdi-content-add-box', 'mdi-content-add-circle', 'mdi-content-add-circle-outline', 'mdi-content-archive', 'mdi-content-backspace', 'mdi-content-block', 'mdi-content-clear', 'mdi-content-content-copy', 'mdi-content-content-cut', 'mdi-content-content-paste', 'mdi-content-create', 'mdi-content-drafts', 'mdi-content-filter-list', 'mdi-content-flag', 'mdi-content-forward', 'mdi-content-gesture', 'mdi-content-inbox', 'mdi-content-link', 'mdi-content-mail', 'mdi-content-markunread', 'mdi-content-redo', 'mdi-content-remove', 'mdi-content-remove-circle', 'mdi-content-remove-circle-outline', 'mdi-content-reply', 'mdi-content-reply-all', 'mdi-content-report', 'mdi-content-save', 'mdi-content-select-all', 'mdi-content-send', 'mdi-content-sort', 'mdi-content-text-format', 'mdi-content-undo', 'mdi-device-access-alarm', 'mdi-device-access-alarms', 'mdi-device-access-time', 'mdi-device-add-alarm', 'mdi-device-airplanemode-off', 'mdi-device-airplanemode-on', 'mdi-device-battery-20', 'mdi-device-battery-30', 'mdi-device-battery-50', 'mdi-device-battery-60', 'mdi-device-battery-80', 'mdi-device-battery-90', 'mdi-device-battery-alert', 'mdi-device-battery-charging-20', 'mdi-device-battery-charging-30', 'mdi-device-battery-charging-50', 'mdi-device-battery-charging-60', 'mdi-device-battery-charging-80', 'mdi-device-battery-charging-90', 'mdi-device-battery-charging-full', 'mdi-device-battery-full', 'mdi-device-battery-std', 'mdi-device-battery-unknown', 'mdi-device-bluetooth', 'mdi-device-bluetooth-connected', 'mdi-device-bluetooth-disabled', 'mdi-device-bluetooth-searching', 'mdi-device-brightness-auto', 'mdi-device-brightness-high', 'mdi-device-brightness-low', 'mdi-device-brightness-medium', 'mdi-device-data-usage', 'mdi-device-developer-mode', 'mdi-device-devices', 'mdi-device-dvr', 'mdi-device-gps-fixed', 'mdi-device-gps-not-fixed', 'mdi-device-gps-off', 'mdi-device-location-disabled', 'mdi-device-location-searching', 'mdi-device-multitrack-audio', 'mdi-device-network-cell', 'mdi-device-network-wifi', 'mdi-device-nfc', 'mdi-device-now-wallpaper', 'mdi-device-now-widgets', 'mdi-device-screen-lock-landscape', 'mdi-device-screen-lock-portrait', 'mdi-device-screen-lock-rotation', 'mdi-device-screen-rotation', 'mdi-device-sd-storage', 'mdi-device-settings-system-daydream', 'mdi-device-signal-cellular-0-bar', 'mdi-device-signal-cellular-1-bar', 'mdi-device-signal-cellular-2-bar', 'mdi-device-signal-cellular-3-bar', 'mdi-device-signal-cellular-4-bar', 'mdi-device-signal-cellular-connected-no-internet-0-bar', 'mdi-device-signal-cellular-connected-no-internet-1-bar', 'mdi-device-signal-cellular-connected-no-internet-2-bar', 'mdi-device-signal-cellular-connected-no-internet-3-bar', 'mdi-device-signal-cellular-connected-no-internet-4-bar', 'mdi-device-signal-cellular-no-sim', 'mdi-device-signal-cellular-null', 'mdi-device-signal-cellular-off', 'mdi-device-signal-wifi-0-bar', 'mdi-device-signal-wifi-1-bar', 'mdi-device-signal-wifi-2-bar', 'mdi-device-signal-wifi-3-bar', 'mdi-device-signal-wifi-4-bar', 'mdi-device-signal-wifi-off', 'mdi-device-storage', 'mdi-device-usb', 'mdi-device-wifi-lock', 'mdi-device-wifi-tethering', 'mdi-editor-attach-file', 'mdi-editor-attach-money', 'mdi-editor-border-all', 'mdi-editor-border-bottom', 'mdi-editor-border-clear', 'mdi-editor-border-color', 'mdi-editor-border-horizontal', 'mdi-editor-border-inner', 'mdi-editor-border-left', 'mdi-editor-border-outer', 'mdi-editor-border-right', 'mdi-editor-border-style', 'mdi-editor-border-top', 'mdi-editor-border-vertical', 'mdi-editor-format-align-center', 'mdi-editor-format-align-justify', 'mdi-editor-format-align-left', 'mdi-editor-format-align-right', 'mdi-editor-format-bold', 'mdi-editor-format-clear', 'mdi-editor-format-color-fill', 'mdi-editor-format-color-reset', 'mdi-editor-format-color-text', 'mdi-editor-format-indent-decrease', 'mdi-editor-format-indent-increase', 'mdi-editor-format-italic', 'mdi-editor-format-line-spacing', 'mdi-editor-format-list-bulleted', 'mdi-editor-format-list-numbered', 'mdi-editor-format-paint', 'mdi-editor-format-quote', 'mdi-editor-format-size', 'mdi-editor-format-strikethrough', 'mdi-editor-format-textdirection-l-to-r', 'mdi-editor-format-textdirection-r-to-l', 'mdi-editor-format-underline', 'mdi-editor-functions', 'mdi-editor-insert-chart', 'mdi-editor-insert-comment', 'mdi-editor-insert-drive-file', 'mdi-editor-insert-emoticon', 'mdi-editor-insert-invitation', 'mdi-editor-insert-link', 'mdi-editor-insert-photo', 'mdi-editor-merge-type', 'mdi-editor-mode-comment', 'mdi-editor-mode-edit', 'mdi-editor-publish', 'mdi-editor-vertical-align-bottom', 'mdi-editor-vertical-align-center', 'mdi-editor-vertical-align-top', 'mdi-editor-wrap-text', 'mdi-file-attachment', 'mdi-file-cloud', 'mdi-file-cloud-circle', 'mdi-file-cloud-done', 'mdi-file-cloud-download', 'mdi-file-cloud-off', 'mdi-file-cloud-queue', 'mdi-file-cloud-upload', 'mdi-file-file-download', 'mdi-file-file-upload', 'mdi-file-folder', 'mdi-file-folder-open', 'mdi-file-folder-shared', 'mdi-hardware-cast', 'mdi-hardware-cast-connected', 'mdi-hardware-computer', 'mdi-hardware-desktop-mac', 'mdi-hardware-desktop-windows', 'mdi-hardware-dock', 'mdi-hardware-gamepad', 'mdi-hardware-headset', 'mdi-hardware-headset-mic', 'mdi-hardware-keyboard', 'mdi-hardware-keyboard-alt', 'mdi-hardware-keyboard-arrow-down', 'mdi-hardware-keyboard-arrow-left', 'mdi-hardware-keyboard-arrow-right', 'mdi-hardware-keyboard-arrow-up', 'mdi-hardware-keyboard-backspace', 'mdi-hardware-keyboard-capslock', 'mdi-hardware-keyboard-control', 'mdi-hardware-keyboard-hide', 'mdi-hardware-keyboard-return', 'mdi-hardware-keyboard-tab', 'mdi-hardware-keyboard-voice', 'mdi-hardware-laptop', 'mdi-hardware-laptop-chromebook', 'mdi-hardware-laptop-mac', 'mdi-hardware-laptop-windows', 'mdi-hardware-memory', 'mdi-hardware-mouse', 'mdi-hardware-phone-android', 'mdi-hardware-phone-iphone', 'mdi-hardware-phonelink', 'mdi-hardware-phonelink-off', 'mdi-hardware-security', 'mdi-hardware-sim-card', 'mdi-hardware-smartphone', 'mdi-hardware-speaker', 'mdi-hardware-tablet', 'mdi-hardware-tablet-android', 'mdi-hardware-tablet-mac', 'mdi-hardware-tv', 'mdi-hardware-watch', 'mdi-image-add-to-photos', 'mdi-image-adjust', 'mdi-image-assistant-photo', 'mdi-image-audiotrack', 'mdi-image-blur-circular', 'mdi-image-blur-linear', 'mdi-image-blur-off', 'mdi-image-blur-on', 'mdi-image-brightness-1', 'mdi-image-brightness-2', 'mdi-image-brightness-3', 'mdi-image-brightness-4', 'mdi-image-brightness-5', 'mdi-image-brightness-6', 'mdi-image-brightness-7', 'mdi-image-brush', 'mdi-image-camera', 'mdi-image-camera-alt', 'mdi-image-camera-front', 'mdi-image-camera-rear', 'mdi-image-camera-roll', 'mdi-image-center-focus-strong', 'mdi-image-center-focus-weak', 'mdi-image-collections', 'mdi-image-color-lens', 'mdi-image-colorize', 'mdi-image-compare', 'mdi-image-control-point', 'mdi-image-control-point-duplicate', 'mdi-image-crop-16-9', 'mdi-image-crop', 'mdi-image-crop-3-2', 'mdi-image-crop-5-4', 'mdi-image-crop-7-5', 'mdi-image-crop-din', 'mdi-image-crop-free', 'mdi-image-crop-landscape', 'mdi-image-crop-original', 'mdi-image-crop-portrait', 'mdi-image-crop-square', 'mdi-image-dehaze', 'mdi-image-details', 'mdi-image-edit', 'mdi-image-exposure', 'mdi-image-exposure-minus-1', 'mdi-image-exposure-minus-2', 'mdi-image-exposure-plus-1', 'mdi-image-exposure-plus-2', 'mdi-image-exposure-zero', 'mdi-image-filter-1', 'mdi-image-filter', 'mdi-image-filter-2', 'mdi-image-filter-3', 'mdi-image-filter-4', 'mdi-image-filter-5', 'mdi-image-filter-6', 'mdi-image-filter-7', 'mdi-image-filter-8', 'mdi-image-filter-9', 'mdi-image-filter-9-plus', 'mdi-image-filter-b-and-w', 'mdi-image-filter-center-focus', 'mdi-image-filter-drama', 'mdi-image-filter-frames', 'mdi-image-filter-hdr', 'mdi-image-filter-none', 'mdi-image-filter-tilt-shift', 'mdi-image-filter-vintage', 'mdi-image-flare', 'mdi-image-flash-auto', 'mdi-image-flash-off', 'mdi-image-flash-on', 'mdi-image-flip', 'mdi-image-gradient', 'mdi-image-grain', 'mdi-image-grid-off', 'mdi-image-grid-on', 'mdi-image-hdr-off', 'mdi-image-hdr-on', 'mdi-image-hdr-strong', 'mdi-image-hdr-weak', 'mdi-image-healing', 'mdi-image-image', 'mdi-image-image-aspect-ratio', 'mdi-image-iso', 'mdi-image-landscape', 'mdi-image-leak-add', 'mdi-image-leak-remove', 'mdi-image-lens', 'mdi-image-looks', 'mdi-image-looks-3', 'mdi-image-looks-4', 'mdi-image-looks-5', 'mdi-image-looks-6', 'mdi-image-looks-one', 'mdi-image-looks-two', 'mdi-image-loupe', 'mdi-image-movie-creation', 'mdi-image-nature', 'mdi-image-nature-people', 'mdi-image-navigate-before', 'mdi-image-navigate-next', 'mdi-image-palette', 'mdi-image-panorama', 'mdi-image-panorama-fisheye', 'mdi-image-panorama-horizontal', 'mdi-image-panorama-vertical', 'mdi-image-panorama-wide-angle', 'mdi-image-photo', 'mdi-image-photo-album', 'mdi-image-photo-camera', 'mdi-image-photo-library', 'mdi-image-portrait', 'mdi-image-remove-red-eye', 'mdi-image-rotate-left', 'mdi-image-rotate-right', 'mdi-image-slideshow', 'mdi-image-straighten', 'mdi-image-style', 'mdi-image-switch-camera', 'mdi-image-switch-video', 'mdi-image-tag-faces', 'mdi-image-texture', 'mdi-image-timelapse', 'mdi-image-timer-10', 'mdi-image-timer', 'mdi-image-timer-3', 'mdi-image-timer-auto', 'mdi-image-timer-off', 'mdi-image-tonality', 'mdi-image-transform', 'mdi-image-tune', 'mdi-image-wb-auto', 'mdi-image-wb-cloudy', 'mdi-image-wb-incandescent', 'mdi-image-wb-irradescent', 'mdi-image-wb-sunny', 'mdi-maps-beenhere', 'mdi-maps-directions', 'mdi-maps-directions-bike', 'mdi-maps-directions-bus', 'mdi-maps-directions-car', 'mdi-maps-directions-ferry', 'mdi-maps-directions-subway', 'mdi-maps-directions-train', 'mdi-maps-directions-transit', 'mdi-maps-directions-walk', 'mdi-maps-flight', 'mdi-maps-hotel', 'mdi-maps-layers', 'mdi-maps-layers-clear', 'mdi-maps-local-airport', 'mdi-maps-local-atm', 'mdi-maps-local-attraction', 'mdi-maps-local-bar', 'mdi-maps-local-cafe', 'mdi-maps-local-car-wash', 'mdi-maps-local-convenience-store', 'mdi-maps-local-drink', 'mdi-maps-local-florist', 'mdi-maps-local-gas-station', 'mdi-maps-local-grocery-store', 'mdi-maps-local-hospital', 'mdi-maps-local-hotel', 'mdi-maps-local-laundry-service', 'mdi-maps-local-library', 'mdi-maps-local-mall', 'mdi-maps-local-movies', 'mdi-maps-local-offer', 'mdi-maps-local-parking', 'mdi-maps-local-pharmacy', 'mdi-maps-local-phone', 'mdi-maps-local-pizza', 'mdi-maps-local-play', 'mdi-maps-local-post-office', 'mdi-maps-local-print-shop', 'mdi-maps-local-restaurant', 'mdi-maps-local-see', 'mdi-maps-local-shipping', 'mdi-maps-local-taxi', 'mdi-maps-location-history', 'mdi-maps-map', 'mdi-maps-my-location', 'mdi-maps-navigation', 'mdi-maps-pin-drop', 'mdi-maps-place', 'mdi-maps-rate-review', 'mdi-maps-restaurant-menu', 'mdi-maps-satellite', 'mdi-maps-store-mall-directory', 'mdi-maps-terrain', 'mdi-maps-traffic', 'mdi-navigation-apps', 'mdi-navigation-arrow-back', 'mdi-navigation-arrow-drop-down', 'mdi-navigation-arrow-drop-down-circle', 'mdi-navigation-arrow-drop-up', 'mdi-navigation-arrow-forward', 'mdi-navigation-cancel', 'mdi-navigation-check', 'mdi-navigation-chevron-left', 'mdi-navigation-chevron-right', 'mdi-navigation-close', 'mdi-navigation-expand-less', 'mdi-navigation-expand-more', 'mdi-navigation-fullscreen', 'mdi-navigation-fullscreen-exit', 'mdi-navigation-menu', 'mdi-navigation-more-horiz', 'mdi-navigation-more-vert', 'mdi-navigation-refresh', 'mdi-navigation-unfold-less', 'mdi-navigation-unfold-more', 'mdi-notification-adb', 'mdi-notification-bluetooth-audio', 'mdi-notification-disc-full', 'mdi-notification-dnd-forwardslash', 'mdi-notification-do-not-disturb', 'mdi-notification-drive-eta', 'mdi-notification-event-available', 'mdi-notification-event-busy', 'mdi-notification-event-note', 'mdi-notification-folder-special', 'mdi-notification-mms', 'mdi-notification-more', 'mdi-notification-network-locked', 'mdi-notification-phone-bluetooth-speaker', 'mdi-notification-phone-forwarded', 'mdi-notification-phone-in-talk', 'mdi-notification-phone-locked', 'mdi-notification-phone-missed', 'mdi-notification-phone-paused', 'mdi-notification-play-download', 'mdi-notification-play-install', 'mdi-notification-sd-card', 'mdi-notification-sim-card-alert', 'mdi-notification-sms', 'mdi-notification-sms-failed', 'mdi-notification-sync', 'mdi-notification-sync-disabled', 'mdi-notification-sync-problem', 'mdi-notification-system-update', 'mdi-notification-tap-and-play', 'mdi-notification-time-to-leave', 'mdi-notification-vibration', 'mdi-notification-voice-chat', 'mdi-notification-vpn-lock', 'mdi-social-cake', 'mdi-social-domain', 'mdi-social-group', 'mdi-social-group-add', 'mdi-social-location-city', 'mdi-social-mood', 'mdi-social-notifications', 'mdi-social-notifications-none', 'mdi-social-notifications-off', 'mdi-social-notifications-on', 'mdi-social-notifications-paused', 'mdi-social-pages', 'mdi-social-party-mode', 'mdi-social-people', 'mdi-social-people-outline', 'mdi-social-person', 'mdi-social-person-add', 'mdi-social-person-outline', 'mdi-social-plus-one', 'mdi-social-poll', 'mdi-social-public', 'mdi-social-school', 'mdi-social-share', 'mdi-social-whatshot', 'mdi-toggle-check-box', 'mdi-toggle-check-box-outline-blank', 'mdi-toggle-radio-button-off', 'mdi-toggle-radio-button-on'];
            var icons_options = [];
            for(var i = 0; i < icons.length; i++) {
                var g = icons[i];
                icons_options.push({key: g, name: g.replace('mdi-',''), html: '<i class="' + g + '"></i>'});
            }

            var getMaterializeIconClass = function(pgel) {
                var cls = pgel.attr('class');
                if (cls) {
                    cls = cls.split(' ');
                    for(var i = 0; i < cls.length; i++) {
                        if(cls[i].indexOf('mdi-') == 0) {
                          return cls[i];
                        }
                    }
                }
                return null;
            }

            f.addComponentType({
                'type': 'mat-icon',
                'selector': '*[class*="mdi-"]',
                'name': 'Mdi icon',
                'preview_image': 'icon.png',
                'code': '<i class="mdi-action-3d-rotation"></i>',
                'sections': crsaAddStandardSections({
                    'maticons' : {
                        'name': "Icon options",
                        'fields': {
                            'maticonsselect' : {
                                type: 'select',
                                name: 'Icon',
                                options: icons_options,
                                on_fields_created : function() {
                                    //only include font css when neccessary
                                    includeMaterializeIconFontsIntoPGUI();
                                },
                                rich: {
                                    'title': 'Select icon',
                                    'modal': true,
                                    'class': 'icon-grid'
                                },
                                'action': 'custom',
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el);
                                    return getMaterializeIconClass(pgel);
                                },
                                set_value: function(obj, value, values) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el);
                                    var cls = getMaterializeIconClass(pgel);
                                    if(cls) pgel.removeClass(cls);
                                    pgel.addClass(value);
                                    return value;
                                }
                            },
                            'maticonssize' : {
                                'type' : 'select',
                                'action': 'apply_class',
                                'show_empty': true,
                                'name': 'Icon Size',
                                'options': [
                                    { key: 'tiny', name: "Tiny" },
                                    { key: 'small', name: "Small" },
                                    { key: 'medium', name: "Medium" },
                                    { key: 'large', name: "Large" }
                                ]
                            },
                            'maticonsalign' : {
                                'type' : 'select',
                                'action': 'apply_class',
                                'show_empty': true,
                                'name': 'Icon Align',
                                'options': [
                                    {key: 'prefix', name: "Prefix"},
                                    {key: 'left', name: "Left"},
                                    {key: 'right', name: "Right"}
                                ]
                            }
                        }
                    }
                })
            });

            var gicons = ['info_outline', 'input', 'invert_colors', 'label', 'label_outline', 'language', 'query_builder', 'perm_identity', 'perm_media', 'perm_phone_msg', 'perm_scan_wifi', 'picture_in_picture', 'play_for_work', 'polymer', 'power_settings_new', 'print', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'email', 'dialpad', 'dialer_sip', 'contacts', 'forward_5', 'stay_current_portrait', 'stay_primary_landscape', 'stay_primary_portrait', 'swap_calls', 'textsms', 'voicemail', 'vpn_key', 'group_work', 'grade', 'clear_all', 'chat_bubble_outline', 'chat_bubble', 'repeat', 'repeat_one', 'replay', 'replay_10', 'replay_30', 'replay_5', 'shuffle', 'skip_next', 'skip_previous', 'contact_phone', 'comment', 'recent_actors', 'snooze', 'sort_by_alpha', 'stop', 'subtitles', 'surround_sound', 'web', 'volume_up', 'volume_off', 'volume_mute', 'toc', 'today', 'toll', 'track_changes', 'translate', 'trending_down', 'question_answer', 'receipt', 'done', 'tab', 'tab_unselected', 'theaters', 'hd', 'games', 'hearing', 'view_module', 'view_list', 'settings_remote', 'settings_voice', 'search', 'settings', 'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_ethernet', 'settings_input_antenna', 'trending_flat', 'trending_up', 'work', 'youtube_searched_for', 'zoom_in', 'my_location', 'visibility_off', 'visibility', 'view_week', 'view_stream', 'view_quilt', 'video_library', 'videocam', 'videocam_off', 'volume_down', 'settings_overscan', 'settings_input_svideo', 'settings_input_hdmi', 'settings_input_composite', 'settings_input_component', 'launch', 'perm_device_information', 'perm_data_setting', 'zoom_out', 'alarm_on', 'dns', 'redeem', 'reorder', 'report_problem', 'restore', 'room', 'schedule', 'movie', 'android', 'announcement', 'mic_off', 'mic_none', 'swap_horiz', 'swap_vert', 'swap_vertical_circle', 'system_update_alt', 'subtitles', 'present_to_all', 'portable_wifi_off', 'phonelink_setup', 'phonelink_ring', 'phonelink_lock', 'phonelink_erase', 'person_pin', 'navigation', 'new_releases', 'not_interested', 'pause', 'pause_circle_filled', 'pause_circle_outline', 'play_arrow', 'play_circle_filled', 'play_circle_outline', 'playlist_add', 'queue', 'queue_music', 'radio', 'class', 'code', 'credit_card', 'dashboard', 'delete', 'description', 'open_with', 'pageview', 'payment', 'perm_camera_mic', 'perm_contact_calendar', 'airplay', 'done_all', 'phone', 'no_sim', 'invert_colors_off', 'chat', 'call_split', 'call_received', 'call_missed', 'call_merge', 'call_made', 'call_end', 'call', 'business', 'stop', 'sort_by_alpha', 'snooze', 'comment', 'clear_all', 'chat_bubble_outline', 'chat_bubble', 'alarm_off', 'message', 'location_on', 'location_off', 'live_help', 'album', 'av_timer', 'closed_caption', 'equalizer', 'turned_in_not', 'verified_user', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'subject', 'supervisor_account', 'settings_power', 'shop', 'shop_two', 'shopping_basket', 'shopping_cart', 'speaker_notes', 'spellcheck', 'star_rate', 'stars', 'store', 'ring_volume', 'speaker_phone', 'stay_current_landscape', 'forum', 'import_export', 'open_in_browser', 'open_in_new', 'forward_30', 'turned_in', 'view_headline', 'view_day', 'warning', 'error_outline', 'error', 'add_alert', 'settings_phone', 'forward_10', 'fast_rewind', 'fast_forward', 'explicit', 'list', 'lock', 'lock_open', 'lock_outline', 'loyalty', 'markunread_mailbox', 'note_add', 'offline_pin', 'http', 'mic', 'loop', 'library_music', 'library_books', 'library_add', 'high_quality', 'surround_sound', 'info', 'https', 'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late', 'assignment_late'];
            var gicons_options = [];
            for(var i = 0; i < icons.length; i++) {
                var g = icons[i];
                gicons_options.push({key: g, name: g.replace(/_/g,' '), html: '<i class="material-icons">' + g + '</i>'});
            }

            var getMaterializeGIconClass = function(pgel) {
                return pgel.html();
            }

            f.addComponentType({
                'type': 'mat-gicon',
                'selector': '.material-icons',
                'name': 'Icon',
                'code': '<i class="material-icons">language</i>',
                'sections': crsaAddStandardSections({
                    // 'maticons' : {
                    //     'name': "Icon options",
                    //     'fields': {
                    //         'matgiconsselect' : {
                    //             type: 'select',
                    //             name: 'Icon',
                    //             options: gicons_options,
                    //             on_fields_created : function() {
                    //                 //only include font css when neccessary
                    //                 includeMaterializeIconFontsIntoPGUI();
                    //             },
                    //             rich: {
                    //                 'title': 'Select icon',
                    //                 'modal': true,
                    //                 'class': 'icon-grid'
                    //             },
                    //             'action': 'custom',
                    //             get_value: function(obj) {
                    //                 var $el = obj.data;
                    //                 var pgel = new pgQuery($el);
                    //                 return getMaterializeGIconClass(pgel);
                    //             },
                    //             set_value: function(obj, value, values) {
                    //                 var $el = obj.data;
                    //                 var pgel = new pgQuery($el);
                    //                 pgel.html(value);
                    //                 return value;
                    //             }
                    //         }
                    //     }
                    // }
                })
            });

            f.addComponentType({
                'type': 'mat-blockquote',
                'selector': 'blockquote',
                'name': 'Blockquote',
                'preview_image': 'blockquote.png',
                'tags': 'major',
                'code': '<blockquote>\
                    This is an example quotation that uses the blockquote tag.\
                </blockquote>'
            });

            // Section
            f.addComponentType({
                'type': 'mat-section',
                'name': 'Section',
                'selector': '.section',
                'empty_placeholder': true,
                'inline_edit': true,
                'code': '<div class="section">\
                    <h5>Section 1</h5>\
                    <p>Stuff</p>\
                </div>',
                'sections': crsaAddStandardSections({})
            });

            // Divider
            f.addComponentType({
                'type': 'mat-divider',
                'name': 'Divider',
                'selector': '.divider',
                'code': '<div class="divider"></div>'
            });

        // Navigation
            f.addComponentType({
                'type': 'mat-nav',
                'selector': 'nav',
                'name': 'Nav',
                'code': '<nav></nav>'
            });

            f.addComponentType({
                'type': 'mat-nav-wrapper',
                'selector': '.nav-wrapper',
                'name': 'Nav wrapper',
                'code': '<div class="nav-wrapper"></div>',
                'tags': 'major',
                'action_menu': {
                    add: ['mat-navbar-logo', 'mat-nav-list', 'mat-side-nav', 'mat-navbar-search']
                }
            });

            // Navbar
            f.addComponentType({
                'type': 'mat-navbar',
                'selector': function($el) {
                    if($el.is('nav') && $el.find('> .nav-wrapper').length > 0) return true;
                    return false;
                },
                'name': 'Navbar',
                'preview_image': 'navbar.png',
                'tags': 'major',
                'priority': 100,
                'code': '<nav>\
                    <div class="nav-wrapper">\
                        <a href="#" class="brand-logo">Logo</a>\
                        <ul id="nav-mobile" class="right hide-on-med-and-down">\
                            <li><a href="#">Sass</a></li>\
                            <li><a href="#">Components</a></li>\
                            <li>\
                                <a class="dropdown-button" href="#!" data-activates="dropdown1">\
                                    Dropdown<i class="material-icons right">arrow_drop_down</i>\
                                </a>\
                                <ul id="dropdown1" class="dropdown-content">\
                                    <li><a href="#!">one</a></li>\
                                    <li><a href="#!">two</a></li>\
                                    <li class="divider"></li>\
                                    <li><a href="#!">three</a></li>\
                                </ul>\
                            </li>\
                        </ul>\
                    </div>\
                </nav>',
                'sections': crsaAddStandardSections({
                    'matnavbar': {
                        'name': 'Navbar options',
                        'fields': {
                            'matnavbarfixed': {
                                'type': 'checkbox',
                                'name': 'Fixed navbar',
                                'action': 'custom',
                                value: '1',
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el);
                                    return pgel.parent().hasClass('navbar-fixed') ? '1' : null;
                                },
                                set_value: function(obj, value, values, oldValue, eventType) {
                                    var $el = obj.data;
                                    var $parent = $el.parent();
                                    var pgel = new pgQuery($el);
                                    var ppgel = pgel.parent();
                                    if (value) {
                                        var fixedPgel = new pgQuery().create('<div class="navbar-fixed"></div>');
                                        fixedPgel.insertBefore(pgel);
                                        fixedPgel.append(pgel);
                                        $.fn.crsa('setNeedsUpdate', false, $parent);
                                    } else if (ppgel.hasClass('navbar-fixed')) {
                                        $parent = $parent.parent();
                                        pgel.insertBefore(ppgel);
                                        ppgel.remove();
                                        $.fn.crsa('setNeedsUpdate', false, $parent);
                                    }
                                    return value;
                                }
                            }
                        }
                    }
                }),
                'action_menu': {
                    add: ['mat-nav-wrapper']
                }
            });

            f.addComponentType({
                'type': 'mat-search-navbar',
                'name': 'Search navbar',
                'code': ' <nav>\
                    <div class="nav-wrapper">\
                        <form>\
                            <div class="input-field">\
                                <input id="search" type="search" required>\
                                <label for="search"><i class="material-icons">search</i></label>\
                                <i class="material-icons">close</i>\
                            </div>\
                        </form>\
                    </div>\
                </nav>'
            });

            f.addComponentType({
                'type': 'mat-navbar-search',
                'selector': function ($el) {
                    if ($el.is('form') && $el.parent().hasClass('nav-wrapper')) return true;
                    return false;
                },
                'name': 'Navbar form',
                'tags': 'major',
                'priority': 100,
                'code': '<form>\
                    <div class="input-field">\
                        <input id="search" type="search" required>\
                        <label for="search"><i class="material-icons">search</i></label>\
                        <i class="material-icons">close</i>\
                    </div>\
                </form>'
            });

            f.addComponentType({
                'type': 'mat-navbar-fixed',
                'selector': '.navbar-fixed',
                'name': 'Navbar fixed',
                'tags': 'major',
                'code': '<div class="navbar-fixed"></div>',
                'action_menu': {
                    add: ['mat-navbar']
                }
            });

            f.addComponentType({
                'type': 'mat-navbar-logo',
                'selector': '.brand-logo',
                'name': 'Logo',
                'preview_image': 'logo.png',
                'code': '<a href="#" class="brand-logo">Logo</a>',
                'sections': crsaAddStandardSections({
                    'matnavlogo': {
                        'name': 'Logo options',
                        'fields': {
                            'matnavlogoalign': {
                                'type' : 'select',
                                'action': 'apply_class',
                                'name': 'Align',
                                'show_empty': true,
                                'options': [
                                    { key: 'right', name: "Right" },
                                    { key: 'center', name: "Center" },
                                    { key: 'left', name: "Left" }
                                ]
                            }
                        }
                    }
                })
            });

            f.addComponentType({
                'type': 'mat-nav-list',
                'selector': function ($el) {
                    if ($el.is('ul') && $el.parent().is('.nav-wrapper')) return true;
                    return false;
                },
                'name': 'Navbar list',
                'preview_image': 'navMobile.png',
                'code': '<ul id="nav-mobile" class="right hide-on-med-and-down">\
                    <li><a href="#">Sass</a></li>\
                    <li><a href="#">Components</a></li>\
                    <li><a href="#">JavaScript</a></li>\
                </ul>',
                'sections': crsaAddStandardSections({
                    'matnavbarlist' : {
                        'name': 'Navbar list options',
                        'fields': {
                            'matnavbarlistname': {
                                'type': 'text',
                                'name': 'Name',
                                'action': 'element_attribute',
                                'attribute': 'id'
                            },
                            'matnavbarlistalign': {
                                'type': 'select',
                                'action': 'apply_class',
                                'name': 'Align',
                                'show_empty': true,
                                'options': [
                                    { key: 'right', name: "Right" },
                                    { key: 'left', name: "Left" }
                                ]
                            }
                        }
                    }
                }),
                'action_menu': {
                    add: ['mat-navbar-list-item']
                }
            });

            f.addComponentType({
                'type': 'mat-navbar-list-item',
                'selector': function ($el) {
                    if ($el.is('li') && $el.parent().parent().is('.nav-wrapper')) return true;
                    return false;
                },
                'name': 'Navbar list item',
                'preview_image': 'navElement.png',
                'code': '<li><a href="#">Link item</a></li>',
                'sections': crsaAddStandardSections({
                    'matnavbarlistitem' : {
                        name : 'Navbar list item options',
                        fields : {
                            'matnavbarlistitemactive' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'active',
                                name: 'Active'
                            }
                        }
                    }
                })
            });

            f.addComponentType({
                'type': 'mat-side-nav',
                'selector': '.side-nav',
                'parent_selector': '.nav-wrapper',
                'name': 'Side nav',
                'tags': 'major',
                'preview_image': 'collapseList.png',
                'priority': 100,
                'code': function () {
                    var id = getUniqueId('side-nav-');

                    return '<ul class="side-nav" id="' + id + '">\
                        <li><a href="sass.html">Sass</a></li>\
                        <li><a href="badges.html">Components</a></li>\
                        <li><a href="collapsible.html">Javascript</a></li>\
                        <li><a href="mobile.html">Mobile</a></li>\
                    </ul>'
                },
                'sections': crsaAddStandardSections({
                    'matsidenav': {
                        'name': 'Sidenav options',
                        'fields': {
                            'matsidenav': {
                                'type': 'text',
                                'name': 'Name',
                                'action': 'custom',
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el);
                                    return pgel.attr('id');
                                },
                                set_value: function(obj, value, values, oldValue, eventType) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el);
                                    var $openSideNavLink = $el.siblings('[data-activates="' + pgel.attr('id') + '"]');
                                    var pgOpenSideNavLink = new pgQuery($openSideNavLink);

                                    if (pgOpenSideNavLink.length > 0) {
                                        pgOpenSideNavLink.attr('data-activates', value);
                                    }
                                    pgel.attr('id', value);
                                    return value;
                                }
                            }
                        }
                    }
                }),
                'on_inserted': function($el, page) {
                    var pgel = new pgQuery($el);
                    var $openSideNavLink = $el.siblings('[data-activates="' + pgel.attr('id') + '"]');
                    var pgOpenSideNavLink = new pgQuery($openSideNavLink);
                    if (pgOpenSideNavLink.length == 0) {
                        var pgOpenSideNavLink = new pgQuery().create('<a href="#" data-activates="' + pgel.attr('id') + '" class="button-collapse"><i class="material-icons">menu</i></a>');
                        pgOpenSideNavLink.insertBefore(pgel);
                    }
                },
                'on_changed': function () {
                    showOrbitMessage();
                }
            });

            f.addComponentType({
                'type': 'mat-collapse-button',
                'name': 'Collapse button',
                'selector': '.button-collapse',
                'parent_selector': '.nav-wrapper',
                'preview_image': 'collapseButton.png',
                'code': '<a href="#" data-activates="" class="button-collapse"><i class="mdi-navigation-menu"></i></a>',
                'tags': 'major',
                'sections': crsaAddStandardSections({
                    'matcollapsebutton' : {
                        'name': 'Collapse button options',
                        'fields': {
                            'matcollapsebuttondataActiates': {
                                'type': 'text',
                                'name': 'Data Activate',
                                'action': 'custom',
                                'live_update': true,
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el);
                                    return pgel.attr('data-activates');
                                },
                                set_value: function(obj, value, values, oldValue, eventType) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el);
                                    var $sidenavList = $el.siblings('#' + pgel.attr('data-activates'));
                                    var pgSideNavLink = new pgQuery($sidenavList);

                                    if (pgSideNavLink.length > 0) {
                                        pgSideNavLink.attr('id', value);
                                    }
                                    pgel.attr('data-activates', value);
                                    return value;
                                }
                            }
                        }
                    }
                }),
                'on_changed': function () {
                    showOrbitMessage();
                }
            });

            // Breadcrumb
            f.addComponentType({
                'type': 'mat-breadcrumb-item',
                'selector': '.breadcrumb',
                'name': 'Breadcrumb item',
                'preview_image': 'breadcrumb-item.png',
                'code': '<a href="#!" class="breadcrumb">Item</a>'
            });

            f.addComponentType({
                'type': 'mat-breadcrumb',
                'selector': '.breadcrumb',
                'name': 'Breadcrumb',
                'preview_image': 'breadcrumb.png',
                'code': '<nav>\
                    <div class="nav-wrapper">\
                        <div class="col s12">\
                            <a href="#!" class="breadcrumb">First</a>\
                            <a href="#!" class="breadcrumb">Second</a>\
                            <a href="#!" class="breadcrumb">Third</a>\
                        </div>\
                    </div>\
                </nav>'
            });

            // Pagination
            f.addComponentType({
                'type': 'mat-pagination',
                'selector': '.pagination',
                'name': 'Pagination',
                'preview_image': 'pagination.png',
                'tags': 'major',
                'code': '<ul class="pagination">\
                    <li class="disabled"><a href="#!"><i class="mdi-navigation-chevron-left"></i></a></li>\
                    <li class="active"><a href="#!">1</a></li>\
                    <li class="waves-effect"><a href="#!">2</a></li>\
                    <li class="waves-effect"><a href="#!">3</a></li>\
                    <li class="waves-effect"><a href="#!">4</a></li>\
                    <li class="waves-effect"><a href="#!">5</a></li>\
                    <li class="waves-effect"><a href="#!"><i class="mdi-navigation-chevron-right"></i></a></li>\
                </ul>',
                'action_menu': {
                    'add': ['mat-pagination-prev-arrow', 'mat-pagination-item', 'mat-pagination-next-arrow']
                }
            });

            f.addComponentType({
                'type': 'mat-pagination-item',
                'selector': '.pagination > li',
                'name': 'Pagination item',
                'code': '<li class="waves-effect"><a href="#!">0</a></li>',
                'sections': crsaAddStandardSections({
                    'matpaginationitem' : {
                        'name': 'Pagination item options',
                        'fields': {
                            'matpaginationitemdiabled': {
                                'type': 'checkbox',
                                'name': 'Disabled',
                                'action': 'apply_class',
                                'value': 'disabled'
                            },
                            'matpaginationitemactive': {
                                'type': 'checkbox',
                                'name': 'Active',
                                'action': 'apply_class',
                                'value': 'active'
                            }
                        }
                    }
                })
            });

            f.addComponentType({
                'type': 'mat-pagination-item',
                'selector': '.pagination > li',
                'name': 'Pagination item',
                'code': '<li class="waves-effect"><a href="#!">0</a></li>',
                'sections': crsaAddStandardSections({
                    'matpaginationitem' : {
                        'name': 'Pagination item options',
                        'fields': {
                            'matpaginationitemdiabled': {
                                'type': 'checkbox',
                                'name': 'Disabled',
                                'action': 'apply_class',
                                'value': 'disabled'
                            },
                            'matpaginationitemactive': {
                                'type': 'checkbox',
                                'name': 'Active',
                                'action': 'apply_class',
                                'value': 'active'
                            }
                        }
                    }
                })
            });

            f.addComponentType({
                'type': 'mat-pagination-prev-arrow',
                'selector': function ($el) {
                    if ($el.is('li') && $el.parent().hasClass('pagination') && $el.find('> a > .mdi-navigation-chevron-left').length > 0) return true;
                    return false;
                },
                'name': 'Pagination prev arrow',
                'priority': 100,
                'code': '<li><a href="#!"><i class="mdi-navigation-chevron-left"></i></a></li>',
                'sections': crsaAddStandardSections({
                    'matpaginationitem' : {
                        'name': 'Pagination arrow options',
                        'fields': {
                            'matpaginationitemdiabled': {
                                'type': 'checkbox',
                                'name': 'Disabled',
                                'action': 'apply_class',
                                'value': 'disabled'
                            }
                        }
                    }
                })
            });

            f.addComponentType({
                'type': 'mat-pagination-next-arrow',
                'selector': function ($el) {
                    if ($el.is('li') && $el.parent().hasClass('pagination') && $el.find('> a > .mdi-navigation-chevron-right').length > 0) return true;
                    return false;
                },
                'name': 'Pagination next arrow',
                'priority': 100,
                'code': '<li><a href="#!"><i class="mdi-navigation-chevron-right"></i></a></li>',
                'sections': crsaAddStandardSections({
                    'matpaginationitem' : {
                        'name': 'Pagination arrow options',
                        'fields': {
                            'matpaginationitemdiabled': {
                                'type': 'checkbox',
                                'name': 'Disabled',
                                'action': 'apply_class',
                                'value': 'disabled'
                            }
                        }
                    }
                })
            });

        // Forms
            // Form
            f.addComponentType({
                'type': 'mat-form',
                'selector': 'form',
                'name': 'Form',
                'tags': 'major',
                'preview_image': 'form.png',
                'code': '<form>\
                    <div class="row">\
                        <div class="input-field col s6">\
                            <input placeholder="Placeholder" id="first_name" type="text" class="validate">\
                            <label for="first_name">First Name</label>\
                        </div>\
                        <div class="input-field col s6">\
                            <input id="last_name" type="text" class="validate">\
                            <label for="last_name">Last Name</label>\
                        </div>\
                    </div>\
                    <div class="row">\
                        <div class="input-field col s12">\
                            <i class="mdi-action-highlight-remove prefix"></i>\
                            <input disabled value="I am not editable" id="disabled" type="text" class="validate">\
                            <label for="disabled">Disabled</label>\
                        </div>\
                    </div>\
                    <div class="row">\
                        <div class="input-field col s12">\
                            <select>\
                                <option value="" disabled selected>Choose your option</option>\
                                <option value="1">Option 1</option>\
                                <option value="2">Option 2</option>\
                                <option value="3">Option 3</option>\
                            </select>\
                            <label>Materialize Select</label>\
                        </div>\
                    </div>\
                    <div class="row">\
                        <div class="input-field col s12">\
                            <textarea id="textarea1" class="materialize-textarea"></textarea>\
                            <label for="textarea1">Message</label>\
                        </div>\
                    </div>\
                    <input type="submit" class="btn red" value="Stuff">\
                </form>',
                'action_menu': {
                    add: ['mat-input-field']
                },
                'on_inserted': function () {
                    showOrbitMessage();
                }
            });

            f.addComponentType({
                'type': 'mat-input-field',
                'selector': '.input-field',
                'name': 'Input field',
                'code': '<div class="row">\
                    <div class="input-field col s12"></div>\
                </div>',
                'action_menu': {
                    add: ['mat-label', 'mat-icon', 'mat-input', 'mat-textarea', 'mat-checkbox', 'mat-radio', 'mat-select']
                }
            });

            f.addComponentType({
                'type': 'mat-label',
                'selector': 'label',
                'name': 'Input label',
                'code': '<label for="input1">Label</label>',
                'sections' : crsaAddStandardSections({
                    'style' : {
                        name : 'Label options',
                        fields : {
                            'for_id' : {
                                'type': 'text',
                                'name': 'For field id',
                                'action': 'element_attribute',
                                'attribute': 'for'
                            }
                        }
                    }
                })
            });

            f.addComponentType({
                'type': 'mat-input',
                'selector': function($el) {
                    if($el.is('input') && $el.attr('type') != 'checkbox' && $el.attr('type') != 'radio') return true;
                    return false;
                },
                'name': 'Input',
                'code': '<input placeholder="Placeholder" type="text">',
                'sections': crsaAddStandardSections({
                    'matinput': {
                        'name': 'Input options',
                        'fields': {
                            'matinputtype' : {
                                'type' : 'select',
                                'name' : 'Type',
                                'action' : 'custom',
                                'options' : [
                                    { key: 'text', name: 'Text' },
                                    { key: 'password', name: 'Password' },
                                    { key: 'number', name: 'Number' },
                                    { key: 'email', name: 'Email' },
                                    { key: 'file', name: 'File' },
                                    { key: 'url', name: 'Url' },
                                    { key: 'search', name: 'Search' },
                                    { key: 'tel', name: 'Tel' },
                                    { key: 'color', name: 'Color' },
                                    { key: 'datetime', name: 'Datetime' },
                                    { key: 'datetime-local', name: 'Datetime local' },
                                    { key: 'date', name: 'Date' },
                                    { key: 'month', name: 'Month' },
                                    { key: 'time', name: 'Time' },
                                    { key: 'week', name: 'Week' }
                                ],
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    return $el.attr('type');
                                },
                                set_value: function(obj, value, values, oldValue, eventType) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el);
                                    pgel.attr('type', value);
                                    return value;
                                }
                            },
                            matinputvalue: {
                                type: 'text',
                                name: 'Value',
                                action: 'custom',
                                attribute: 'value',
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    var $input = $el;
                                    return $input.attr('value');
                                },
                                set_value: function(obj, value, values, oldValue, eventType) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el);
                                    pgel.attr('value', value);
                                    pgel.val(value);
                                    return value;
                                }
                            },
                            'placeholder': {
                                type: 'text',
                                name: 'Placeholder',
                                action: 'element_attribute',
                                attribute: 'placeholder'
                            },
                            'validate': {
                                type: 'checkbox',
                                name: 'validate',
                                action: 'apply_class',
                                value: 'validate'
                            }
                        }
                    }
                })
            });

            f.addComponentType({
                'type': 'mat-textarea',
                'selector': 'textarea',
                'name': 'Textarea',
                'code': '<textarea class="materialize-textarea"></textarea>',
            });

            f.addComponentType({
                'type': 'mat-checkbox',
                'selector': 'input[type="checkbox"]',
                'name': 'Checkbox',
                'code': function () {
                    var id = getUniqueId("checkbox");
                    return '<p><input id="' + id + '" type="checkbox"><label for="' + id + '">Checkbox</label></p>';
                },
                'sections': crsaAddStandardSections({
                    'matcheckbox': {
                        'name': 'Checkbox options',
                        'fields': {
                            'matcheckboxfilledin': {
                                'type': 'checkbox',
                                'name': 'Filled in',
                                'value': 'filled-in',
                                'action': 'apply_class'
                            },
                            'matcheckboxdisable': {
                                'type': 'checkbox',
                                'name': 'Disabled',
                                'value' : '1',
                                'action' : 'custom',
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el);
                                    return pgel.attr('disabled');
                                },
                                set_value: function(obj, value, values, oldValue, eventType) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el);
                                    if(value) {
                                        pgel.attr('disabled', value);
                                    } else {
                                        pgel.removeAttr('disabled');
                                    }
                                    return value;
                                }
                            }
                        }
                    }
                })
            });

            f.addComponentType({
                'type': 'mat-radio',
                'selector': 'input[type="radio"]',
                'name': 'Radio Button',
                'code': function () {
                    var id = getUniqueId("radio");
                    var groupId = getUniqueId("group");
                    return '<p><input id="' + id + '" name="' + groupId + '" type="radio"><label for="' + id + '">Radio</label></p>';
                },
                'sections': crsaAddStandardSections({
                    'matradiobutton': {
                        'name': 'Radio options',
                        'fields': {
                            'matradiobuttonwithgap': {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'with-gap',
                                name: 'White Gap'
                            },
                            'matradiobuttongroupname': {
                                'type': 'text',
                                'name': 'Group name',
                                'action' : 'element_attribute',
                                attribute : 'name'
                            }
                        }
                    }
                })
            });

            f.addComponentType({
                'type': 'mat-select',
                'selector': 'select',
                'name': 'Select',
                'code': '<select>\
                    <option value="" disabled selected>Choose your option</option>\
                    <option value="1">Option 1</option>\
                    <option value="2">Option 2</option>\
                    <option value="3">Option 3</option>\
                </select>',
                'sections': crsaAddStandardSections({
                    'matselect': {
                        'name': 'Radio options',
                        'fields': {
                            'matselectmultiple' : {
                                'type' : 'checkbox',
                                'name' : 'Multiple',
                                'action' : 'element_attribute',
                                'attribute' : 'multiple',
                                'value' : 'multiple',
                                'attribute_without_value': true
                            },
                            'matselectmultiple' : {
                                'type' : 'checkbox',
                                'name' : 'Disabled',
                                'action' : 'element_attribute',
                                'attribute' : 'disabled',
                                'value' : 'disabled',
                                'attribute_without_value': true
                            },
                            'matselecthasicons' : {
                                'type' : 'checkbox',
                                'name' : 'Has icons',
                                'action' : 'apply_class',
                                'value' : 'icons'
                            },
                            'matselectbrowserdefault' : {
                                'type' : 'checkbox',
                                'name' : 'Browser default',
                                'action' : 'apply_class',
                                'value' : 'browser-default'
                            }
                        }
                    }
                }),
                'action_menu': {
                    add: ['mat-optgroup', 'mat-option']
                },
                'on_inserted': function () {
                    showOrbitMessage()
                },
                'on_changed': function () {
                    showOrbitMessage()
                }
            });

            f.addComponentType({
                'type': 'mat-optgroup',
                'selector': 'optgroup',
                'parent_selector': 'select',
                'name': 'Option group',
                'code': '<optgroup label="team 1">\
                    <option value="1">Option 1</option>\
                    <option value="2">Option 2</option>\
                </optgroup>',
                'sections': crsaAddStandardSections({
                    'matselect': {
                        'name': 'Radio options',
                        'fields': {
                            'matselectmultiple' : {
                                'type' : 'text',
                                'name' : 'Label',
                                'action' : 'element_attribute',
                                'attribute' : 'label'
                            }
                        }
                    }
                }),
                'on_inserted': function () {
                    showOrbitMessage()
                },
                'on_changed': function () {
                    showOrbitMessage()
                }
            });

            f.addComponentType({
                'type': 'mat-option',
                'selector': 'option',
                'name': 'Select option',
                'code': '<option value="1">Option 1</option>',
                'sections': crsaAddStandardSections({
                    'matoption': {
                        'name': 'Option options',
                        'fields': {
                            'matoptionicon' : {
                                'type' : 'text',
                                'name' : 'Icon URL',
                                'action' : 'element_attribute',
                                'attribute' : 'data-icon'
                            },
                            'matoptioncircle' : {
                                'type': 'checkbox',
                                'name': 'Circle',
                                'action': 'apply_class',
                                'value': 'circle'
                            },
                            'matoptioniconposition' : {
                                'type' : 'select',
                                'name' : 'Icon position',
                                'action' : 'apply_class',
                                'show_empty' : true,
                                'options' : [
                                    { 'key' : 'left', 'name' : 'Left' },
                                    { 'key' : 'right', 'name' : 'Right' }
                                ]
                            }
                        }
                    }
                }),
                'on_inserted': function () {
                    showOrbitMessage()
                },
                'on_changed': function () {
                    showOrbitMessage()
                }
            });

            f.addComponentType({
                'type': 'mat-switch',
                'selector': '.switch',
                'name': 'Switch',
                'preview_image': 'switchInput.png',
                'code': '<div class="switch">\
                    <label>\
                        Off\
                        <input type="checkbox">\
                        <span class="lever"></span>\
                        On\
                    </label>\
                </div>',
                'sections': crsaAddStandardSections({
                    'matswitch': {
                        'name': 'Switch options',
                        'fields': {
                            'matswitchdisable' : {
                                'type' : 'checkbox',
                                'name' : 'Disabled',
                                'action' : 'custom',
                                'value' : '1',
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el.find('input[type="checkbox"]'));
                                    return pgel.attr('disabled');
                                },
                                set_value: function(obj, value, values, oldValue, eventType) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el.find('input[type="checkbox"]'));
                                    if(value) {
                                        pgel.attr('disabled', value);
                                    } else {
                                        pgel.removeAttr('disabled');
                                    }
                                    return value;
                                }
                            }
                        }
                    }
                })
            });

            f.addComponentType({
                'type': 'mat-file-field',
                'selector': '.file-field',
                'name': 'File field',
                'preview_image': 'fileField.png',
                'priority': '100',
                'code': '<div class="file-field input-field">\
                    <div class="btn">\
                        <span>File</span>\
                        <input type="file">\
                    </div>\
                    <div class="file-path-wrapper">\
                        <input class="file-path validate" type="text">\
                    </div>\
                </div>',
                'sections': crsaAddStandardSections({
                    'matfilefield': {
                        'name': 'File field options',
                        'fields': {
                            'matfilefieldmultiple' : {
                                'type' : 'checkbox',
                                'name' : 'Multiple',
                                'action' : 'custom',
                                'value' : '1',
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el.find('input[type="file"]'));
                                    return pgel.attr('multiple');
                                },
                                set_value: function(obj, value, values, oldValue, eventType) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el.find('input[type="file"]'));
                                    if(value) {
                                        pgel.attr('multiple', value);
                                    } else {
                                        pgel.removeAttr('multiple');
                                    }
                                    return value;
                                }
                            }
                        }
                    }
                })
            });

            f.addComponentType({
                'type': 'mat-range-field',
                'selector': '.range-field',
                'name': 'Range field',
                'preview_image': 'rangeField.png',
                'code': '<p class="range-field">\
                    <input type="range" id="test5" min="0" max="100" />\
                </p>',
                'sections': crsaAddStandardSections({
                    'matrangefield' : {
                        'name': 'Range Field Options',
                        'fields': {
                            'matrangefieldmin' : {
                                'type': 'text',
                                'name': 'Min value',
                                'live_update': true,
                                'action': 'custom',
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el.find('input[type="range"]'));
                                   return pgel.attr('min');
                                },
                                set_value: function(obj, value, values, oldValue, eventType) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el.find('input[type="range"]'));
                                    pgel.attr('min', value);
                                    return value;
                              }
                            },
                            'matrangefieldmax' : {
                                'type': 'text',
                                'name': 'Max value',
                                'live_update': true,
                                'action': 'custom',
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el.find('input[type="range"]'));
                                    return pgel.attr('max');
                                },
                                set_value: function(obj, value, values, oldValue, eventType) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el.find('input[type="range"]'));
                                    pgel.attr('max', value);
                                    return value;
                                }
                            }
                        }
                    }
                })
            });

        // UI Elements
            // Progressbar
            var getProgressBarChild = function ($el) {
                var $child = $el.children('.determinate');
                if ($child.length == 0) {
                    $child = $el.children('.indeterminate');
                }

                return $child;
            }

            f.addComponentType({
                'type': 'mat-progressbar',
                'selector': '.progress',
                'name': 'Progress bar',
                'preview_image': 'progressBar.png',
                'code': '<div class="progress">\
                    <div class="determinate" style="width: 70%"></div>\
                </div>',
                'sections': crsaAddStandardSections({
                    'matprogressbar' : {
                        name : 'Progress bar options',
                        fields : {
                            'matprogressbartype' : {
                                'type' : 'select',
                                'name' : 'Type',
                                'action' : 'custom',
                                'show_empty' : false,
                                'options' : [
                                    {key: 'determinate', name: 'Determinate'},
                                    {key: 'indeterminate', name: 'Indeterminate'}
                                ],
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    var $child = getProgressBarChild($el);
                                    var pgel = new pgQuery($child);

                                    if (pgel.hasClass('determinate')) return 'determinate';
                                    else if (pgel.hasClass('indeterminate')) return 'indeterminate';
                                },
                                set_value: function(obj, value, values, oldValue, eventType) {
                                    var $el = obj.data;
                                    var $child = getProgressBarChild($el);
                                    var pgel = new pgQuery($child);

                                    pgel.removeClass(oldValue);
                                    if (value) {
                                        if (pgel.length == 0) {
                                            pgel = new pgQuery().create('<div class="' + value + '"></div>');
                                            pgel.appendTo(new pgQuery($el));
                                        }
                                        pgel.removeClass(oldValue);
                                        pgel.addClass(value);
                                    }

                                    $.fn.crsa('setNeedsUpdate', false, $el);
                                    return value;
                                }
                            }
                        }
                    }
                }),
                'action_menu': {
                    add: ['mat-determinate-progress-bar', 'mat-indeterminate-progress-bar']
                }
            });

            var progressbar_sections = {
                'matprogressbar' : {
                    name : 'Progress bar options',
                    fields : {
                        'matprogressbartype' : {
                            'type' : 'select',
                            'name' : 'Type',
                            'action' : 'apply_class',
                            'show_empty' : false,
                            'options' : [
                                {key: 'determinate', name: 'Determinate'},
                                {key: 'indeterminate', name: 'Indeterminate'}
                            ]
                        }
                    }
                }
            }

            f.addComponentType({
                'type': 'mat-determinate-progress-bar',
                'selector': '.determinate',
                'parent_selector': '.progress',
                'name': 'Determinate',
                'code': '<div class="determinate" style="width: 70%"></div>',
                'sections': crsaAddStandardSections(progressbar_sections)
            });

            f.addComponentType({
                'type': 'mat-indeterminate-progress-bar',
                'selector': '.indeterminate',
                'parent_selector': '.progress',
                'name': 'Indeterminate',
                'code': '<div class="indeterminate"></div>',
                'sections': crsaAddStandardSections(progressbar_sections)
            });

            // Badge
            f.addComponentType({
                'type': 'mat-badge',
                'selector': '.badge',
                'name': 'Badge',
                'preview_image': 'badge.png',
                'code': '<span class="badge">144</span>',
                'sections': crsaAddStandardSections({
                    'matbadge' : {
                        name : 'Badge Options',
                        fields : {
                            'matbadgeshape' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'new',
                                name: 'New'
                            }
                        }
                    }
                })
            });

            // Collection
            f.addComponentType({
                'type': 'mat-collection',
                'selector': '.collection',
                'name': 'Collection',
                'tags': 'major',
                'preview_image': 'collection.png',
                'code': '<ul class="collection">\
                    <li class="collection-item">Alvin<span class="badge">1</span></li>\
                    <li class="collection-item">Alvin</li>\
                    <li class="collection-item">Alvin<span class="new badge">4</span></li>\
                    <li class="collection-item">Alvin</li>\
                </ul>',
                'sections': crsaAddStandardSections({
                    'matcollection' : {
                        name : 'Collection options',
                        fields : {
                            'matwithheader' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'with-header',
                                name: 'With header?'
                            }
                        }
                    }
                }),
                'action_menu': {
                    add: ['mat-collection-header', 'mat-collection-item', 'mat-collection-link-item', 'mat-collection-avatar-item', 'mat-collection-secondary-item']
                }
            });

            f.addComponentType({
                'type': 'mat-collection-item',
                'name': 'Collection item',
                'selector': '.collection-item',
                'parent_selector': '.collection',
                'preview_image': 'collectionItem.png',
                'code': '<li class="collection-item">Alvin</li>',
                'sections': crsaAddStandardSections({
                    'matcollectionitem' : {
                        'name': 'Collection item options',
                        'fields': {
                            'matcollectionitemdismissable' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'dismissable',
                                name: 'Dismissable'
                            },
                            'matcollectionitemactive' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'active',
                                name: 'Active'
                            },
                            'matcollectionitemaavatar' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'avatar',
                                name: 'Avatar'
                            }
                        }
                    }
                }),
                'action_menu': {
                    add: ['mat-secondary-for-collection-item', 'mat-badge']
                }
            });

            f.addComponentType({
                'type': 'mat-collection-header',
                'selector': '.collection-header',
                'name': 'Collection header',
                'parent_selector': '.collection',
                'preview_image': 'collectionHeader.png',
                'code': '<li class="collection-header"><h4>Collection Header</h4></li>'
            });

            f.addComponentType({
                'type': 'mat-collection-link-item',
                'name': 'Collection link item',
                'parent_selector': '.collection',
                'preview_image': 'linkCollectionItem.png',
                'code': '<a href="#!" class="collection-item">Alvin</a>'
            });

            f.addComponentType({
                'type': 'mat-collection-avatar-item',
                'selector': '.collection-item.avatar',
                'name': 'Collection avatar item',
                'parent_selector': '.collection',
                'preview_image': 'avatarCollectionItem.png',
                'code': '<li class="collection-item avatar">\
                    <img src="assets/img/user.png" class="circle">\
                    <span class="title">Title</span>\
                    <p>First Line <br>\
                        Second Line\
                    </p>\
                    <a href="#!" class="secondary-content"><i class="mdi-action-grade"></i></a>\
                </li>',
                'action_menu': {
                    add: ['html-img', 'html-span', 'html-p']
                }
            });

            f.addComponentType({
                'type': 'mat-collection-secondary-item',
                'name': 'Collection with secondary item',
                'parent_selector': '.collection',
                'preview_image': 'collectionItemWithSecondary.png',
                'code': '<li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="mdi-content-send"></i></a></div></li>'
            });

            f.addComponentType({
                'type': 'mat-secondary-for-collection-item',
                'name': 'Collection secondary item',
                'parent_selector': '.collection-item',
                'preview_image': 'collectionSecondaryItem.png',
                'code': '<a href="#!" class="secondary-content"><i class="mdi-content-send"></i></a>'
            });

            // Footer
            f.addComponentType({
                'type': 'mat-footer',
                'selector': '.page-footer',
                'name': 'Footer',
                'tags': 'major',
                'preview_image': 'footer.png',
                'code': '<footer class="page-footer">\
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
                </footer>',
                'action_menu': {
                    add: ['mat-container', 'mat-footer-copyright']
                }
            });

            f.addComponentType({
                'type': 'mat-footer-copyright',
                'selector': '.footer-copyright',
                'name': 'Footer copyright',
                'parent_selector': '.page-footer',
                'preview_image': 'footer-copyright.png',
                'code': '<div class="footer-copyright">\
                    <div class="container">\
                        © 2014 Copyright Text\
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>\
                    </div>\
                </div>',
                'action_menu': {
                    add: ['mat-container', 'html-a']
                }
            });

            // Card
            f.addComponentType({
                'type': 'mat-card',
                'selector': '.card',
                'name': 'Card',
                'preview_image': 'card.png',
                'tags': 'major',
                'code': '<div class="card blue-grey darken-1">\
                    <div class="card-content white-text">\
                        <span class="card-title">Card Title</span>\
                        <p>I am a very simple card. I am good at containing small bits of information.\
                        I am convenient because I require little markup to use effectively.</p>\
                    </div>\
                    <div class="card-action">\
                        <a href="#">This is a link</a>\
                        <a href="#">This is a link</a>\
                    </div>\
                </div>',
                'sections': crsaAddStandardSections({
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
                }),
                'action_menu': {
                    add: ['mat-card-image-container', 'mat-card-content', 'mat-card-action', 'mat-card-reveal']
                }
            });

            f.addComponentType({
                'type': 'mat-card-image-container',
                'selector': '.card-image',
                'name': 'Card image container',
                'preview_image': 'cardImage.png',
                'parent_selector': '.card',
                'code': function () {
                    return '<div class="card-image">\
                        <img src="' + getPlaceholderImage() + '">\
                        <span class="card-title">Card Title</span>\
                    </div>';
                },
                'sections': crsaAddStandardSections({
                    'matcardimagecontainer' : {
                        name : 'Card Image Container Options',
                        fields : {
                            'matcardimagecontainerwavesEffect' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'waves-effect',
                                name: 'Wave Effect'
                            },
                            'matcardimagecontainerwavesCircle' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'waves-circle',
                                name: 'Wave Circle'
                            },
                            'matcardimagecontainerwavesColor' : {
                                type : 'select',
                                name: 'Wave Color',
                                action: 'apply_class',
                                show_empty: true,
                                options: [
                                    { key: 'waves-light', name: 'Light' },
                                    { key: 'waves-red', name: 'Red' },
                                    { key: 'waves-yellow', name: 'Yellow' },
                                    { key: 'waves-orange', name: 'Orange' },
                                    { key: 'waves-purple', name: 'Purple' },
                                    { key: 'waves-green', name: 'Green' },
                                    { key: 'waves-teal', name: 'Teal' }
                                ]
                            },
                            'matcardimagecontainerwavesBlock' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'waves-block',
                                name: 'Wave Block'
                            }
                        }
                    }
                }),
                'action_menu': {
                    add: ['mat-card-image', 'mat-card-title']
                }
            });

            f.addComponentType({
                'type': 'mat-card-image',
                'selector': '.card-image > img',
                'name': 'Card image',
                'parent_selector': '.card-image',
                'preview_image': 'cardImage.png',
                'code': function () {
                    return '<img src="' + getPlaceholderImage() + '">';
                },
                'sections': crsaAddStandardSections({
                    'matcardimage' : {
                        name : 'Card Image Options',
                        fields : {
                            'matcardimageactivator' : {
                                type : 'checkbox',
                                action: 'apply_class',
                                value: 'activator',
                                name: 'Activator'
                            }
                        }
                    }
                })
            });

            f.addComponentType({
                'type': 'mat-card-content',
                'selector': '.card-content',
                'parent_selector': '.card',
                'name': 'Card content',
                'preview_image': 'cardContent.png',
                'code': '<div class="card-content white-text">\
                    <span class="card-title">Card Title</span>\
                    <p>I am a very simple card. I am good at containing small bits of information.\
                    I am convenient because I require little markup to use effectively.</p>\
                </div>',
                'action_menu': {
                    add: ['mat-card-title', 'html-p']
                }
            })

            f.addComponentType({
                'type': 'mat-card-title',
                'selector': '.card-title',
                'name': 'Card title',
                'parent_selector': '.card-image,.card-content',
                'code': '<span class="card-title">Card Title</span>'
            });

            f.addComponentType({
                'type': 'mat-card-action',
                'selector': '.card-action',
                'parent_selector': '.card',
                'name': 'Card action',
                'preview_image': 'cardAction.png',
                'code': '<div class="card-action">\
                    <a href="#">This is a link</a>\
                    <a href="#">This is a link</a>\
                </div>',
                'action_menu': {
                    add: ['html-a']
                }
            });

            f.addComponentType({
                'type': 'mat-card-reveal',
                'selector': '.card-reveal',
                'parent_selector': '.card',
                'name': 'Card reveal',
                'preview_image': 'cardReveal.png',
                'code': '<div class="card-reveal">\
                    <span class="card-title grey-text text-darken-4">Card Title <i class="mdi-navigation-close right"></i></span>\
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>\
                </div>',
                'action_menu': {
                    add: ['mat-card-title', 'html-p', 'html-span']
                }
            });

            f.addComponentType({
                'type': 'mat-card-panel',
                'selector': '.card-panel',
                'name': 'Card panel',
                'preview_image': 'cardPanel.png',
                'tags': 'major',
                'code': '<div class="card-panel teal">\
                    <span class="white-text">I am a very simple card. I am good at containing small bits of information.\
                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\
                    </span>\
                </div>',
                'action_menu': {
                    add: ['html-p', 'html-span']
                }
            });

            // Chip
            f.addComponentType({
                'type': 'mat-chip',
                'selector': '.chip',
                'name': 'Chip',
                'preview_image': 'chip.png',
                'code': '<div class="chip">\
                    Jane Doe\
                </div>',
                'action_menu': {
                    add: ['html-img', 'mat-icon']
                }
            });

            // Preload circular
            f.addComponentType({
                'type': 'mat-circular-preload',
                'selector': '.preloader-wrapper',
                'name': 'Circular preload',
                'preview_image': 'preloadCircular.png',
                'tags': 'major',
                'code': '<div class="preloader-wrapper big active">\
                    <div class="spinner-layer spinner-blue-only">\
                        <div class="circle-clipper left">\
                            <div class="circle"></div>\
                        </div><div class="gap-patch">\
                            <div class="circle"></div>\
                        </div><div class="circle-clipper right">\
                            <div class="circle"></div>\
                        </div>\
                    </div>\
                </div>',
                'sections': {
                    'matcircularpreload' : {
                        'name': 'Circular Preload Options',
                        'fields': {
                            'matcircularpreloadactive' : {
                                'type': 'checkbox',
                                'action': 'apply_class',
                                'value': 'active',
                                'name': 'Active'
                            },
                            'matcircularpreloadsize' : {
                                'type': 'select',
                                'action': 'apply_class',
                                'show_empty': true,
                                'name': 'Icon Size',
                                'options': [
                                    { key: 'big', name: "Big" },
                                    { key: 'small', name: "Small" }
                                ]
                            }
                        }
                    }
                },
                'action_menu': {
                    add: ['mat-spinner-layer']
                }
            });

            f.addComponentType({
                'type': 'mat-spinner-layer',
                'name': 'Spinner layer',
                'selector': '.spinner-layer',
                'parent_selector': '.preloader-wrapper',
                'code': '<div class="spinner-layer spinner-blue-only">\
                    <div class="circle-clipper left">\
                        <div class="circle"></div>\
                    </div><div class="gap-patch">\
                        <div class="circle"></div>\
                    </div><div class="circle-clipper right">\
                        <div class="circle"></div>\
                    </div>\
                </div>',
                'sections': {
                    'materialize.spinner-layer' : {
                        name : 'Circular Preload Options',
                        fields : {
                            'materialize.spinner-layer.color' : {
                                type : 'select',
                                action: 'apply_class',
                                name: 'Spinner Color',
                                options: [
                                    { key: 'spinner-blue-only', name: "Blue Only" },
                                    { key: 'spinner-blue', name: "Blue" },
                                    { key: 'spinner-red-only', name: "Red Only" },
                                    { key: 'spinner-red', name: "Red" },
                                    { key: 'spinner-yellow-only', name: "Yellow Only" },
                                    { key: 'spinner-yellow', name: "Yellow" },
                                    { key: 'spinner-green-only', name: "Green Only" },
                                    { key: 'spinner-green', name: "Green" }
                                ]
                            }
                        }
                    }
                },
                'on_inserted': function () {
                    showOrbitMessage();
                },
                'on_changed': function () {
                    showOrbitMessage();
                }
            });

        // Javascript
            // Coolapsible
            f.addComponentType({
                'type': 'mat-collapsible',
                'selector': '.collapsible',
                'name': 'Collapsible',
                'preview_image': 'collapsible.png',
                'tags': 'major',
                'code': '<ul class="collapsible" data-collapsible="accordion">\
                    <li>\
                        <div class="collapsible-header"><i class="mdi-image-filter-drama"></i>First</div>\
                        <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>\
                    </li>\
                    <li>\
                        <div class="collapsible-header"><i class="mdi-maps-place"></i>Second</div>\
                        <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>\
                    </li>\
                    <li>\
                        <div class="collapsible-header"><i class="mdi-social-whatshot"></i>Third</div>\
                        <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>\
                    </li>\
                </ul>',
                'sections': {
                    'matcollapsible' : {
                        name : 'Collapsible Options',
                        fields : {
                            'matcollapsibletype' : {
                                type : 'select',
                                action: 'apply_class',
                                show_empty: true,
                                name: 'Type',
                                options: [
                                  { key: 'popout', name: "Popout" }
                                ]
                            },
                            'matcollapsiblestyle' : {
                                type : 'select',
                                name: 'Style',
                                action: 'custom',
                                show_empty: true,
                                live_update: true,
                                options: [
                                    { key: 'accordion', name: 'Accordion' },
                                    { key: 'expandable', name: 'Expandable' }
                                ],
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el);
                                    return pgel.attr('data-collapsible');
                                },
                                set_value: function(obj, value, values) {
                                    var $el = obj.data;
                                    var pgel = new pgQuery($el);
                                    if (value && value.length > 0)
                                        pgel.attr('data-collapsible', value);
                                    else
                                        pgel.removeAttr('data-collapsible');
                                    return value;
                                }
                            }
                        }
                    }
                },
                'on_inserted': function () {
                    showOrbitMessage();
                },
                'on_changed': function () {
                    showOrbitMessage();
                },
                "action_menu": {
                    add: ['mat-collapsible-item']
                }
            });
            // ACTION
            var collapsible_action = new PgComponentType('mat-collapsible-action', 'Collapsible');
            collapsible_action.selector = '[data-collapsible]';
            collapsible_action.attribute = 'data-collapsible';
            collapsible_action.helplink = 'collapsible.html';
            collapsible_action.action = true;
            collapsible_action.not_main_type = true;
            collapsible_action.sections = {
                'mat.collapsible.parameters' : {
                    'name' : 'Options',
                    'fields' : {
                        'matcollapsibletype' : {
                            type : 'select',
                            action: 'apply_class',
                            show_empty: true,
                            name: 'Type',
                            options: [
                              { key: 'popout', name: "Popout" }
                            ]
                        },
                        'matcollapsiblestyle' : {
                            type : 'select',
                            name: 'Style',
                            action: 'custom',
                            show_empty: true,
                            live_update: true,
                            options: [
                                { key: 'accordion', name: 'Accordion' },
                                { key: 'expandable', name: 'Expandable' }
                            ],
                            get_value: function(obj) {
                                var $el = obj.data;
                                var pgel = new pgQuery($el);
                                return pgel.attr('data-collapsible');
                            },
                            set_value: function(obj, value, values) {
                                var $el = obj.data;
                                var pgel = new pgQuery($el);
                                if (value && value.length > 0)
                                    pgel.attr('data-collapsible', value);
                                else
                                    pgel.removeAttr('data-collapsible');
                                return value;
                            }
                        }
                    }
                }
            };
            collapsible_action.on_action_added = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.addClass('collapsible');
                showOrbitMessage();
            };
            collapsible_action.on_action_removed = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.removeClass('collapsible');
            };
            f.addComponentType(collapsible_action);
            actions.push(collapsible_action);

            f.addComponentType({
                'type': 'mat-collapsible-item',
                'selector': '.collapsible > li',
                'name': 'Collapsible item',
                'code': '<li>\
                    <div class="collapsible-header"><i class="mdi-image-filter-drama"></i>First</div>\
                    <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>\
                </li>',
                'on_inserted': function () {
                    showOrbitMessage();
                },
                'on_changed': function () {
                    showOrbitMessage();
                },
                "action_menu": {
                    add: ['mat-collapsible-item-header', 'mat-collapsible-item-body']
                }
            });

            f.addComponentType({
                'type': 'mat-collapsible-item-header',
                'selector': '.collapsible-header',
                'name': 'Collapsible header',
                'code': '<div class="collapsible-header"><i class="mdi-image-filter-drama"></i>Item</div>',
                'sections': crsaAddStandardSections({
                    'matcollapsibleitemheader': {
                        'name': "Collapsible header options",
                        'fields': {
                            'matcollapsible': {
                                'type': 'checkbox',
                                'name': 'Active',
                                'action': 'apply_class',
                                'value': 'active'
                            }
                        }
                    }
                }),
                'on_inserted': function () {
                    showOrbitMessage();
                },
                'on_changed': function () {
                    showOrbitMessage();
                },
                "action_menu": {
                    add: ['mat-icon']
                }
            });

            f.addComponentType({
                'type': 'mat-collapsible-item-body',
                'selector': '.collapsible-body',
                'name': 'Collapsible body',
                'code': '<div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>',
                'on_inserted': function () {
                    showOrbitMessage();
                },
                'on_changed': function () {
                    showOrbitMessage();
                },
                "action_menu": {
                    add: ['html-p']
                }
            });

            // Tooltip
            var tooltip_action = new PgComponentType('mat-tooltip-action', 'Tooltip');
            tooltip_action.selector = '.tooltipped';
            tooltip_action.attribute = 'data-tooltip';
            tooltip_action.helplink = 'dialogs.html';
            tooltip_action.action = true;
            tooltip_action.not_main_type = true;
            tooltip_action.sections = {
                'mat.tooltip.parameters' : {
                    'name': 'Options',
                    'fields': {
                        'mattooltiptext' : {
                            type: 'text',
                            name: 'Text',
                            action: 'element_attribute',
                            attribute_keep_if_empty: true,
                            attribute: 'data-tooltip'
                        },
                        'mattooltipposition' : {
                            type : 'select',
                            action: 'element_attribute',
                            attribute: 'data-position',
                            show_empty: true,
                            name: 'Position',
                            options: [
                                { key: 'bottom', name: "Bottom" },
                                { key: 'top', name: "Top" },
                                { key: 'left', name: "Left" },
                                { key: 'right', name: "Right" }
                            ]
                        },
                        'mattooltipdelay' : {
                            type: 'text',
                            name: 'Delay',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            attribute: 'data-delay'
                        }
                    }
                }
            };
            tooltip_action.on_action_added = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.attr('data-tooltip', '');
                pgp.addClass('tooltipped');
                showOrbitMessage();
            };
            tooltip_action.on_action_removed = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.removeAttr('data-tooltip');
                pgp.removeClass('tooltipped');
            };
            f.addComponentType(tooltip_action);
            actions.push(tooltip_action);

            // Dropdown
            f.addComponentType({
                'type': 'mat-dropdown-button',
                'selector': '.dropdown-button',
                'name': 'Dropdown button',
                'tags': 'major',
                'code': function () {
                    var id = getUniqueId('dropdown');
                    return '<a class="dropdown-button btn" href="#" data-activates="' + id + '">Dropdown!</a>';
                },
                'on_inserted': function($el, page) {
                    var pgel = new pgQuery($el);
                    var $dropdownList = $el.siblings('#' + pgel.attr('data-activates'));
                    var pgDropdownList = new pgQuery($dropdownList);
                    if (pgDropdownList.length == 0) {
                        var pgDropdownList = new pgQuery().create('<ul id="' + pgel.attr('data-activates') + '" class="dropdown-content">\
                            <li><a href="#!">one</a></li>\
                            <li><a href="#!">two</a></li>\
                            <li class="divider"></li>\
                            <li><a href="#!">three</a></li>\
                        </ul>');
                        pgDropdownList.insertAfter(pgel);
                        $.fn.crsa('setNeedsUpdate', false, $el.parent());
                    }
                }
            });

            f.addComponentType({
                'type': 'mat-dropdown-content',
                'selector': '.dropdown-content',
                'name': 'Dropdown content',
                'code': function () {
                    var id = getUniqueId('dropdown');

                    return '<ul id="' + id + '" class="dropdown-content">\
                        <li><a href="#!">one</a></li>\
                        <li><a href="#!">two</a></li>\
                        <li class="divider"></li>\
                        <li><a href="#!">three</a></li>\
                    </ul>'
                },
                'action_menu': {
                    add: ['html-li']
                }
            });

            // ACTION
            var dropdown_action = new PgComponentType('mat-dropdown-action', 'Dropdown');
            dropdown_action.selector = '.dropdown-button';
            dropdown_action.attribute = 'data-activates';
            dropdown_action.helplink = 'dropdown.html';
            dropdown_action.action = true;
            dropdown_action.not_main_type = true;
            dropdown_action.sections = {
                'mat.dropdown.parameters' : {
                    'name': 'Options',
                    'fields': {
                        'matdropdowntext' : {
                            type: 'text',
                            name: 'Name',
                            attribute_keep_if_empty: true,
                            action: 'custom',
                            get_value: function(obj) {
                                var $el = obj.data;
                                var pgel = new pgQuery($el);
                                return pgel.attr('data-activates');
                            },
                            set_value: function(obj, value, values, oldValue, eventType) {
                                var $el = obj.data;
                                var pgel = new pgQuery($el);
                                var $sidenavList = $el.siblings('#' + pgel.attr('data-activates'));
                                var pgSideNavLink = new pgQuery($sidenavList);

                                if (pgSideNavLink.length > 0) {
                                    pgSideNavLink.attr('id', value);
                                }
                                pgel.attr('data-activates', value);
                                return value;
                            }
                        },
                        'matdropdowninduration' : {
                            type: 'text',
                            name: 'Induration',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            attribute: 'induration'
                        },
                        'matdropdownoutduration' : {
                            type: 'text',
                            name: 'Outduration',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            attribute: 'outduration'
                        },
                        'matdropdownconstrainwidth' : {
                            type: 'checkbox',
                            name: 'Free width',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            value: 'false',
                            attribute: 'constrainwidth'
                        },
                        'matdropdownhover' : {
                            type: 'checkbox',
                            name: 'Hover',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            value: 'true',
                            attribute: 'hover'
                        },
                        'matdropdowngutter' : {
                            type: 'text',
                            name: 'Gutter',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            attribute: 'gutter'
                        },
                        'matdropdownbeloworigin' : {
                            type: 'checkbox',
                            name: 'Below origin',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            value: 'true',
                            attribute: 'beloworigin'
                        },
                        'matdropdownalignment' : {
                            type : 'select',
                            action: 'element_attribute',
                            attribute: 'alignment',
                            show_empty: true,
                            name: 'Alignment',
                            options: [
                                { key: 'bottom', name: "Bottom" },
                                { key: 'top', name: "Top" },
                                { key: 'left', name: "Left" },
                                { key: 'right', name: "Right" }
                            ]
                        }
                    }
                }
            };
            dropdown_action.on_action_added = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.attr('data-activates', '');
                pgp.addClass('dropdown-button');
                showOrbitMessage();
            };
            dropdown_action.on_action_removed = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.removeAttr('data-activates');
                pgp.removeClass('dropdown-button');
            };
            f.addComponentType(dropdown_action);
            actions.push(dropdown_action);


            // Materialbox
            var materialboxd_action = new PgComponentType('mat-box-action', 'Materialbox');
            materialboxd_action.selector = '.materialboxed';
            materialboxd_action.helplink = 'media.html';
            materialboxd_action.action = true;
            materialboxd_action.not_main_type = true;
            materialboxd_action.sections = {
                'mat.box.parameters' : {
                    'name': 'Options',
                    'fields': {
                        'matboxtext' : {
                            type: 'text',
                            name: 'Caption',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            attribute: 'data-caption'
                        }
                    }
                }
            };
            materialboxd_action.on_action_added = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.addClass('materialboxed');
                showOrbitMessage();

            };
            materialboxd_action.on_action_removed = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.removeClass('materialboxed');
            };
            f.addComponentType(materialboxd_action);
            actions.push(materialboxd_action);

            // Slider
            var callSlider = function($el, func, msg) {
                var id = $el.attr('data-pg-id');
                var code = '$(\'[data-pg-id="' + id + '"]\').' + func + ';';
                var page = pinegrow.getPageForElement($el);
                pinegrow.setIgnoreClicks(true);
                pinegrow.executeScriptInPage(page, code);
                pinegrow.setIgnoreClicks(false);
                if(msg) {
                    pinegrow.showQuickMessage(msg);
                }
            }

            var gotoSlide = function ($el) {
                var $slider = $el.closest('.slider');
                callSlider($slider, "slider('pause')");
                var slideId = $el.index();
                var $currEl = $slider.find('> .slides > .active');
                var currElId = $currEl.index();

                numToGoTo = slideId - currElId;
                while (numToGoTo != 0) {
                    if (numToGoTo > 0) {
                        callSlider($slider, "slider('next')");
                        numToGoTo--;
                    }
                    else if (numToGoTo < 0) {
                        callSlider($slider, "slider('prev')");
                        numToGoTo++;
                    }
                }
            }

            f.addComponentType({
                'type': 'mat-slider',
                'selector': '.slider',
                'name': 'Slider',
                'preview_image': 'slider.png',
                'tags': 'major',
                'code': function () {
                    return '<div class="slider" data-slider>\
                        <ul class="slides">\
                            <li>\
                                <img src="' + getPlaceholderImage() + '">\
                                <div class="caption center-align">\
                                    <h3>This is our big Tagline!</h3>\
                                    <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                                </div>\
                            </li>\
                            <li>\
                                <img src="' + getPlaceholderImage() + '">\
                                <div class="caption left-align">\
                                    <h3>Left Aligned Caption</h3>\
                                    <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                                </div>\
                            </li>\
                            <li>\
                                <img src="' + getPlaceholderImage() + '">\
                                <div class="caption right-align">\
                                    <h3>Right Aligned Caption</h3>\
                                    <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                                </div>\
                            </li>\
                            <li>\
                                <img src="' + getPlaceholderImage() + '">\
                                <div class="caption center-align">\
                                    <h3>This is our big Tagline!</h3>\
                                    <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                                </div>\
                            </li>\
                        </ul>\
                    </div>';
                },
                'action_menu': {
                    actions : [
                        {label: "Pause slider", action: function($el) {
                            callSlider($el, "slider('pause')", "Slider paused.");
                        }},
                        {label: "Resume slider", action: function($el) {
                            callSlider($el, "slider('start')", "Slider resumed.");
                        }},
                        {label: "Next slide", action: function($el) {
                            callSlider($el, "slider('next')");
                        }},
                        {label: "Previous slide", action: function($el) {
                            callSlider($el, "slider('prev')");
                        }}
                    ],
                    add: ['mat-slider-slides']
                }
            });

            f.addComponentType({
                'type': 'mat-slider-slides',
                'selector': '.slides',
                'name': 'Slides',
                'preview_image': 'slider.png',
                'code': function () {
                    return '<ul class="slides">\
                        <li>\
                            <img src="' + getPlaceholderImage() + '">\
                            <div class="caption center-align">\
                                <h3>This is our big Tagline!</h3>\
                                <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                            </div>\
                        </li>\
                        <li>\
                            <img src="' + getPlaceholderImage() + '">\
                            <div class="caption left-align">\
                                <h3>Left Aligned Caption</h3>\
                                <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                            </div>\
                        </li>\
                        <li>\
                            <img src="' + getPlaceholderImage() + '">\
                            <div class="caption right-align">\
                                <h3>Right Aligned Caption</h3>\
                                <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                            </div>\
                        </li>\
                        <li>\
                            <img src="' + getPlaceholderImage() + '">\
                            <div class="caption center-align">\
                                <h3>This is our big Tagline!</h3>\
                                <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                            </div>\
                        </li>\
                    </ul>';
                },
                'action_menu': {
                    add: ['mat-slider-slides-item']
                }
            });

            f.addComponentType({
                'type': 'mat-slider-slides-item',
                'selector': '.slides > li',
                'name': 'Slides item',
                'preview_image': 'slider.png',
                'code': function () {
                    return '<li>\
                        <img src="' + getPlaceholderImage() + '">\
                        <div class="caption center-align">\
                            <h3>This is our big Tagline!</h3>\
                            <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                        </div>\
                    </li>';
                },
                'action_menu': {
                    add: ['html-img', 'mat-slide-caption']
                },
                on_selected: function($el) {
                    pinegrow.showQuickMessage("Going to slide...");
                    gotoSlide($el);
                }
            });

            f.addComponentType({
                'type': 'mat-slide-caption',
                'selector': '.caption',
                'name': 'Slide caption',
                'code': '<div class="caption center-align">\
                    <h3>This is our big Tagline!</h3>\
                    <h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>\
                </div>',
                'sections': crsaAddStandardSections({
                    'matslidecaption': {
                        'name': 'Slide caption options',
                        'fields': {
                            'matslidecaptionalign': {
                                'type': 'select',
                                'name': 'Text align',
                                'action': 'apply_class',
                                'options': [
                                    { 'key' : 'left-align', 'name' : 'Left' },
                                    { 'key' : 'center-align', 'name' : 'Center' },
                                    { 'key' : 'right-align', 'name' : 'Right' }
                                ]
                            }
                        }
                    }
                })
            });

            // ACTION
            var slider_action = new PgComponentType('mat-slider-action', 'Slider');
            slider_action.selector = '.slider';
            slider_action.attribute = 'data-slider';
            slider_action.helplink = 'media.html';
            slider_action.action = true;
            slider_action.not_main_type = true;
            slider_action.sections = {
                'mat.slider.parameters': {
                    'name': 'Options',
                    'fields': {
                        'matsliderindicators': {
                            type: 'checkbox',
                            name: 'Hide indicators',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            value: 'false',
                            attribute: 'indicators'
                        },
                        'matsliderheight': {
                            type: 'text',
                            name: 'Height',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            attribute: 'height'
                        },
                        'matslidertransition': {
                            type: 'text',
                            name: 'Transition',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            attribute: 'transition'
                        },
                        'matsliderinterval': {
                            type: 'text',
                            name: 'Interval',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            attribute: 'interval'
                        }
                    }
                }
            };
            slider_action.on_action_added = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.addClass('slider');
                showOrbitMessage();

            };
            slider_action.on_action_removed = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.removeClass('slider');
            };
            f.addComponentType(slider_action);
            actions.push(slider_action);


            // Carousel
            var callCarouselSlider = function($el, func, msg) {
                var id = $el.attr('data-pg-id');
                var code = '$(\'[data-pg-id="' + id + '"]\').' + func + ';';
                var page = pinegrow.getPageForElement($el);
                pinegrow.setIgnoreClicks(true);
                pinegrow.executeScriptInPage(page, code);
                pinegrow.setIgnoreClicks(false);
                if(msg) {
                    pinegrow.showQuickMessage(msg);
                }
            }

            var gotoCarouselSlide = function ($el) {
                var id = $el.find('> img').attr('data-pg-id');
                var code = '$(\'[data-pg-id="' + id + '"]\').click();';
                var page = pinegrow.getPageForElement($el);
                pinegrow.setIgnoreClicks(true);
                pinegrow.executeScriptInPage(page, code);
                pinegrow.setIgnoreClicks(false);
            }

            f.addComponentType({
                'type': 'mat-carousel',
                'selector': '.carousel',
                'name': 'Carousel',
                'tags': 'major',
                'code': function () {
                    return '<div class="carousel" data-carousel>\
                        <a class="carousel-item" href="#one!"><img src="' + getPlaceholderImage() + '"></a>\
                        <a class="carousel-item" href="#two!"><img src="' + getPlaceholderImage() + '"></a>\
                        <a class="carousel-item" href="#three!"><img src="' + getPlaceholderImage() + '"></a>\
                        <a class="carousel-item" href="#four!"><img src="' + getPlaceholderImage() + '"></a>\
                        <a class="carousel-item" href="#five!"><img src="' + getPlaceholderImage() + '"></a>\
                    </div>'
                },
                'action_menu': {
                    actions : [
                        {label: "Next slide", action: function($el) {
                            callSlider($el, "carousel('next')");
                        }},
                        {label: "Previous slide", action: function($el) {
                            callSlider($el, "carousel('prev')");
                        }}
                    ],
                    add: ['mat-carousel-slide']
                }
            });

            f.addComponentType({
                'type': 'mat-carousel-slide',
                'selector': '.carousel-item',
                'name': 'Carousel slide',
                'code': function () {
                    return '<a class="carousel-item" href="#five!"><img src="' + getPlaceholderImage() + '"></a>';
                },
                'action_menu': {
                    add: ['html-img']
                },
                'on_selected': function ($el) {
                    gotoCarouselSlide($el);
                }
            })

            // ACTION
            var carousel_action = new PgComponentType('mat-carousel-action', 'Carousel');
            carousel_action.selector = '.carousel';
            carousel_action.attribute = 'data-carousel';
            carousel_action.helplink = 'media.html';
            carousel_action.action = true;
            carousel_action.not_main_type = true;
            carousel_action.sections = {
                'mat.carousel.parameters': {
                    'name': 'Options',
                    'fields': {
                        'matcarouselcarouselslider': {
                            'type': 'checkbox',
                            'name': 'Carousel slider',
                            'action': 'apply_class',
                            'value': 'carousel-slider'
                        },
                        'matcarouseltimeconstant': {
                            type: 'text',
                            name: 'Time constant',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            attribute: 'time_constant'
                        },
                        'matcarouseldist': {
                            type: 'text',
                            name: 'Dist',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            attribute: 'dist'
                        },
                        'matcarouselshift': {
                            type: 'text',
                            name: 'Shift',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            attribute: 'shift'
                        },
                        'matcarouselpadding': {
                            type: 'text',
                            name: 'Padding',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            attribute: 'padding'
                        },
                        'matcarouselfullwidth': {
                            type: 'text',
                            name: 'Full width',
                            action: 'element_attribute',
                            attribute_keep_if_empty: false,
                            attribute: 'full_width'
                        }
                    }
                }
            };
            carousel_action.on_action_added = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.addClass('carousel');
                showOrbitMessage();
            };
            carousel_action.on_action_removed = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.removeClass('carousel');
            };
            f.addComponentType(carousel_action);
            actions.push(carousel_action);

            // Modal
            f.addComponentType({
                'type': 'mat-modal-button',
                'selector': '.modal-trigger',
                'name': 'Modal button',
                'preview_image': 'modal.png',
                'priority': 100,
                'tags': 'major',
                'code': function () {
                    var id = getUniqueId('modal');
                    return '<a class="waves-effect waves-light btn modal-trigger" href="#' + id + '">Modal</a>';
                },
                'on_inserted': function($el, page) {
                    var pgel = new pgQuery($el);
                    var id = pgel.attr('href');
                    var $modalStructure = $el.siblings(id);
                    var pgModalStructure = new pgQuery($modalStructure);
                    if (pgModalStructure.length == 0) {
                        var pgModalStructure = new pgQuery().create('<div id="' + id.substr(1, id.length) + '" class="modal" data-modal>\
                            <div class="modal-content">\
                                <h4>Modal Header</h4>\
                                <p>A bunch of text</p>\
                            </div>\
                            <div class="modal-footer">\
                                <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>\
                            </div>\
                        </div>');
                        pgModalStructure.insertAfter(pgel);
                        $.fn.crsa('setNeedsUpdate', false, $el.parent());
                    }
                    showOrbitMessage();
                }
            });

            f.addComponentType({
                'type': 'mat-modal',
                'selector': '.modal',
                'name': 'Modal',
                'preview_image': 'modal.png',
                'tags': 'major',
                'code': function () {
                    var id = getUniqueId('modal');
                    return '<div id="' + id + '" class="modal" data-modal>\
                        <div class="modal-content">\
                            <h4>Modal Header</h4>\
                            <p>A bunch of text</p>\
                        </div>\
                        <div class="modal-footer">\
                            <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>\
                        </div>\
                    </div>';
                },
                'sections': crsaAddStandardSections({
                    'matmodal' : {
                        name : 'Modal options',
                        fields : {
                            'matmodalname' : {
                                type : 'text',
                                name: 'Modal name',
                                action: 'custom',
                                live_update: true,
                                get_value: function(obj) {
                                    var $el = obj.data;
                                    var pgmodal = new pgQuery($el.find('.modal'));
                                    return pgmodal.attr('id');
                                },
                                set_value: function(obj, value, values, oldValue, eventType) {
                                    var $el = obj.data;
                                    var pgmodal = new pgQuery($el.find('.modal'));
                                    var pgtrigger = new pgQuery($el.find('.modal-trigger'));
                                    pgmodal.attr('id', value);
                                    pgtrigger.attr('href', "#" + value);
                                    return value;
                                }
                            }
                        }
                    }
                }),
                'action_menu': {
                    add: ['mat-modal-content', 'mat-modal-footer']
                }
            });

            f.addComponentType({
                'type': 'mat-modal-content',
                'selector': '.modal-content',
                'name': 'Modal content',
                'code': '<div class="modal-content">\
                    <h4>Modal Header</h4>\
                    <p>A bunch of text</p>\
                </div>'
            });

            f.addComponentType({
                'type': 'mat-modal-footer',
                'selector': '.modal-footer',
                'name': 'Modal footer',
                'code': '<div class="modal-footer">\
                    <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>\
                </div>'
            });

            // ACTION
            var modal_action = new PgComponentType('mat-modal-action', 'Modal');
            modal_action.selector = '.modal';
            modal_action.attribute = 'data-modal';
            modal_action.helplink = 'modals.html';
            modal_action.action = true;
            modal_action.not_main_type = true;
            modal_action.sections = {
                'mat.modal.parameters': {
                    'name': 'Options',
                    'fields': {
                        'matmodalfixedfooter': {
                            'type': 'checkbox',
                            'name': 'Fixed footer',
                            'action': 'apply_class',
                            'value': 'modal-fixed-footer'
                        },
                        'matmodalbottomsheet': {
                            'type': 'checkbox',
                            'name': 'Bottom sheet',
                            'action': 'apply_class',
                            'value': 'bottom-sheet'
                        }
                    }
                }
            };
            modal_action.on_action_added = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.addClass('modal');
                showOrbitMessage();
            };
            modal_action.on_action_removed = function(pgel, cp, action_def, $el) {
                var pgp = new pgQuery($el);
                pgp.removeClass('modal');
            };
            f.addComponentType(modal_action);
            actions.push(modal_action);


            // Parallax
            f.addComponentType({
                'type': 'mat-parallax-container',
                'selector': '.parallax-container',
                'name': 'Parallax container',
                'preview_image': 'parallax.png',
                'tags': 'major',
                'code': function () {
                    return '<div class="parallax-container">\
                        <div class="parallax"><img src="' + getPlaceholderImage() + '"></div>\
                    </div>';
                },
                'action_menu': {
                    add: ['mat-parallax']
                }
            });

            f.addComponentType({
                'type': 'mat-parallax',
                'selector': '.parallax',
                'name': 'Parallax',
                'code': function () {
                    return '<div class="parallax"><img src="' + getPlaceholderImage() + '"></div>';
                },
                'action_menu': {
                    add: ['html-img']
                }
            });


            // Scrollspy
            f.addComponentType({
                'type': 'mat-scrollspy-container',
                'name': 'Scrollspy',
                'code': '<div class="row">\
                    <div class="col s12 m9 l10">\
                        <div id="introduction" class="section scrollspy">\
                            <p>Content </p>\
                        </div>\
                        <div id="structure" class="section scrollspy">\
                            <p>Content </p>\
                        </div>\
                        <div id="initialization" class="section scrollspy">\
                            <p>Content </p>\
                        </div>\
                    </div>\
                    <div class="col hide-on-small-only m3 l2">\
                        <ul class="section table-of-contents">\
                            <li><a href="#introduction">Introduction</a></li>\
                            <li><a href="#structure">Structure</a></li>\
                            <li><a href="#initialization">Intialization</a></li>\
                        </ul>\
                    </div>\
                </div>',
                'on_inserted': function () {
                    showOrbitMessage();
                }
            });

            f.addComponentType({
                'type': 'mat-scrollspy-content',
                'selector': '.scrollspy',
                'name': 'Scrollspy content',
                'priority': 100,
                'tags': 'major',
                'code': '<div id="introduction" class="section scrollspy">\
                    <p>Content </p>\
                </div>'
            });

            f.addComponentType({
                'type': 'mat-table-of-contents',
                'selector': '.table-of-contents',
                'name': 'Scrollspy list',
                'priority': 100,
                'tags': 'major',
                'code': '<ul class="section table-of-contents">\
                    <li><a href="#introduction">Introduction</a></li>\
                    <li><a href="#structure">Structure</a></li>\
                    <li><a href="#initialization">Intialization</a></li>\
                </ul>'
            });


            // Tabs
            f.addComponentType({
                'type': 'mat-tabs-container',
                'name': 'Tabs',
                'code': function () {
                    var id1 = getUniqueId('tabs');
                    var id2 = getUniqueId('tabs');
                    var id3 = getUniqueId('tabs');
                    var id4 = getUniqueId('tabs');

                    return '<div class="row">\
                        <div class="col s12">\
                            <ul class="tabs">\
                                <li class="tab col s3"><a href="#' + id1 + '">Test 1</a></li>\
                                <li class="tab col s3"><a class="active" href="#' + id2 + '">Test 2</a></li>\
                                <li class="tab col s3 disabled"><a href="#' + id3 + '">Disabled Tab</a></li>\
                                <li class="tab col s3"><a href="#' + id4 + '">Test 4</a></li>\
                            </ul>\
                        </div>\
                        <div id="' + id1 + '" class="col s12">Test 1</div>\
                        <div id="' + id2 + '" class="col s12">Test 2</div>\
                        <div id="' + id3 + '" class="col s12">Test 3</div>\
                        <div id="' + id4 + '" class="col s12">Test 4</div>\
                    </div>';
                },
                'on_inserted': function () {
                    showOrbitMessage();
                }
            });

            f.addComponentType({
                'type': 'mat-tabs',
                'selector': '.tabs',
                'name': 'Tabs',
                'tags': 'major',
                'code': function () {
                    var id1 = getUniqueId('tabs');
                    var id2 = getUniqueId('tabs');
                    var id3 = getUniqueId('tabs');
                    var id4 = getUniqueId('tabs');

                    return '<ul class="tabs">\
                        <li class="tab col s3"><a href="#' + id1 + '">Test 1</a></li>\
                        <li class="tab col s3"><a class="active" href="#' + id2 + '">Test 2</a></li>\
                        <li class="tab col s3 disabled"><a href="#' + id3 + '">Disabled Tab</a></li>\
                        <li class="tab col s3"><a href="#' + id4 + '">Test 4</a></li>\
                    </ul>';
                },
                'action_menu': {
                    add: ['mat-tabs-item'],
                    on_add: function($el, $new, newdef, prepend) {
                        var pgel = new pgQuery($el);
                        var pgtabs = new pgQuery($el.parent());
                        var pgnew = new pgQuery($new);

                        var id = $new.find('a').attr('href');
                        id = id.substr(1, id.length);
                        var pgTabContent = new pgQuery().create('<div id="' + id + '" class="col s12">Test</div>');

                        if(prepend) {
                            pgel.prepend(pgnew);
                            pgTabContent.insertAfter(pgtabs);
                        } else {
                            pgel.append(pgnew);
                            pgTabContent.insertAfter(pgtabs);
                        }
                        showOrbitMessage();
                    }
                }
            });


            f.addComponentType({
                'type': 'mat-tabs-item',
                'name': 'Tab item',
                'code': function () {
                    var id = getUniqueId('tabs');
                    return '<li class="tab col s3"><a href="#' + id + '">Test</a></li>';
                }
            });

        // Other
            // List
             f.addComponentType({
                'type' : 'mat-list',
                tags: 'major',
                'selector' : 'ul,ol',
                'code' : '<ul>\
                    <li>Lorem ipsum dolor sit amet</li>\
                    <li>Consectetur adipiscing elit</li>\
                    <li>Integer molestie lorem at massa</li>\
                    <li>Nulla volutpat aliquam velit\
                    <ul>\
                    <li>Phasellus iaculis neque</li>\
                    <li>Purus sodales ultricies</li>\
                    </ul>\
                    </li>\
                </ul>',
                'name' : 'List',
                'action_menu' : {
                    'add' : ['mat-list-item']
                }
            });

            // List item
            f.addComponentType({
                'type' : 'mat-list-item',
                'selector' : 'li',
                parent_selector: 'ol,ul',
                'code' : '<li>List item</li>',
                'name' : 'List Item',
                'sections' : crsaAddStandardSections({})
            });




        // Add common sections to all elements
        var tag = {
            'type' : 'tag',
            'selector' : function($el) { return true },
            'name' : 'Div',
            'display_name' : 'tag',
            'priority' : 2001,
            'sections' : crsaAddStandardSections({
                attributes : {
                    inherit: true
                }
            })
        }
        f.addComponentType(tag);

        // Tell Pinegrow about the framework
        pinegrow.addFramework(f);

        var getTypes = function(list) {
            var r = [];
            for(var i = 0; i < list.length; i++) {
                if(typeof list[i] == 'string') {
                    var def = f.getComponentType(list[i]);
                    if(def) {
                        r.push(def);
                    }
                } else {
                    r.push(list[i]);
                }
            }
            return r;
        }

        var section = new PgFrameworkLibSection('matgrid', 'Grid');
        section.setComponentTypes(getTypes(['mat-container', 'mat-row', 'mat-column']));
        f.addLibSection(section);

        section = new PgFrameworkLibSection('matbuttons', 'Buttons');
        section.setComponentTypes( getTypes(['mat-button', 'mat-fixed-button', 'mat-dropdown-button', 'mat-modal-button']));
        f.addLibSection(section);

        section = new PgFrameworkLibSection('mattypo', 'Text &amp; Images');
        section.setComponentTypes( getTypes(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'mat-video-container', 'mat-responsive-video', 'mat-icon', 'mat-section', 'mat-divider', 'mat-blockquote']));
        f.addLibSection(section);

        section = new PgFrameworkLibSection('matform', 'Form');
        section.setComponentTypes(getTypes(['mat-form', 'mat-input-field', 'mat-switch', 'mat-file-field', 'mat-range-field']));
        f.addLibSection(section);

        section = new PgFrameworkLibSection('mattable', 'Tables');
        section.setComponentTypes(getTypes(['mat-table', 'mat-thead', 'mat-tbody', 'mat-th', 'mat-tr', 'mat-td']));
        f.addLibSection(section);

        section = new PgFrameworkLibSection('matnavigation', 'Navigation');
        section.setComponentTypes(getTypes(['mat-navbar', 'mat-search-navbar', 'mat-nav', 'mat-nav-wrapper', 'mat-side-nav', 'mat-breadcrumb', 'mat-breadcrumb-item', 'mat-pagination']));
        f.addLibSection(section);

        section = new PgFrameworkLibSection('matuielements', 'UI Elements');
        section.setComponentTypes(getTypes(['mat-progressbar', 'mat-circular-preload', 'mat-badge', 'mat-collection', 'mat-footer', 'mat-card', 'mat-card-panel', 'mat-chip']));
        f.addLibSection(section);

        section = new PgFrameworkLibSection('matjavascript', 'Javascript');
        section.setComponentTypes(getTypes(['mat-collapsible', 'mat-slider', 'mat-carousel', 'mat-parallax-container', 'mat-scrollspy-container', 'mat-tabs-container']));
        f.addLibSection(section);

        //Actions
        section = new PgFrameworkLibSection('matactions', 'Materialize');
        section.setComponentTypes( actions );
        section.closed = false;
        f.addActionsSection(section);

        var res = new PgComponentTypeResource('https://fonts.googleapis.com/icon?family=Material+Icons');
        res.type = 'text/css';
        f.resources.add(res);

        var res = new PgComponentTypeResource('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css');
        res.type = 'text/css';
        f.resources.add(res);

        var res = new PgComponentTypeResource('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js');
        res.type = 'application/javascript';
        f.resources.add(res);

        f.resources.description = "CSS and JS files needed for MaterializeCSS to work.";


        f.on_plugin_activated = function(pgPage, init_done_func) {
            if(!f.detect(pgPage)) {
                if(init_done_func) init_done_func(f);
            }
        }

        //Register starting page template
        f.addTemplateProjectFromResourceFolder('template', null, 7);
   });
});