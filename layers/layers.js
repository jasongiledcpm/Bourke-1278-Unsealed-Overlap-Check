var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_OSM200MeterSegmentswith1278Damages_2 = new ol.format.GeoJSON();
var features_OSM200MeterSegmentswith1278Damages_2 = format_OSM200MeterSegmentswith1278Damages_2.readFeatures(json_OSM200MeterSegmentswith1278Damages_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSM200MeterSegmentswith1278Damages_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSM200MeterSegmentswith1278Damages_2.addFeatures(features_OSM200MeterSegmentswith1278Damages_2);
var lyr_OSM200MeterSegmentswith1278Damages_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OSM200MeterSegmentswith1278Damages_2, 
                style: style_OSM200MeterSegmentswith1278Damages_2,
                popuplayertitle: 'OSM 200 Meter Segments with 1278 Damages',
                interactive: false,
                title: '<img src="styles/legend/OSM200MeterSegmentswith1278Damages_2.png" /> OSM 200 Meter Segments with 1278 Damages'
            });
var format_OSM200MeterChainagewith1278Damages_3 = new ol.format.GeoJSON();
var features_OSM200MeterChainagewith1278Damages_3 = format_OSM200MeterChainagewith1278Damages_3.readFeatures(json_OSM200MeterChainagewith1278Damages_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSM200MeterChainagewith1278Damages_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSM200MeterChainagewith1278Damages_3.addFeatures(features_OSM200MeterChainagewith1278Damages_3);
var lyr_OSM200MeterChainagewith1278Damages_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OSM200MeterChainagewith1278Damages_3, 
                style: style_OSM200MeterChainagewith1278Damages_3,
                popuplayertitle: 'OSM 200 Meter Chainage with 1278 Damages',
                interactive: false,
                title: '<img src="styles/legend/OSM200MeterChainagewith1278Damages_3.png" /> OSM 200 Meter Chainage with 1278 Damages'
            });
var format_1034P1Overlap_4 = new ol.format.GeoJSON();
var features_1034P1Overlap_4 = format_1034P1Overlap_4.readFeatures(json_1034P1Overlap_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1034P1Overlap_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1034P1Overlap_4.addFeatures(features_1034P1Overlap_4);
var lyr_1034P1Overlap_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1034P1Overlap_4, 
                style: style_1034P1Overlap_4,
                popuplayertitle: '1034 P1 Overlap',
                interactive: true,
                title: '<img src="styles/legend/1034P1Overlap_4.png" /> 1034 P1 Overlap'
            });
var format_1034P4Overlap_5 = new ol.format.GeoJSON();
var features_1034P4Overlap_5 = format_1034P4Overlap_5.readFeatures(json_1034P4Overlap_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1034P4Overlap_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1034P4Overlap_5.addFeatures(features_1034P4Overlap_5);
var lyr_1034P4Overlap_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1034P4Overlap_5, 
                style: style_1034P4Overlap_5,
                popuplayertitle: '1034 P4 Overlap',
                interactive: true,
                title: '<img src="styles/legend/1034P4Overlap_5.png" /> 1034 P4 Overlap'
            });
var format_1105Overlap_6 = new ol.format.GeoJSON();
var features_1105Overlap_6 = format_1105Overlap_6.readFeatures(json_1105Overlap_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1105Overlap_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1105Overlap_6.addFeatures(features_1105Overlap_6);
var lyr_1105Overlap_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1105Overlap_6, 
                style: style_1105Overlap_6,
                popuplayertitle: '1105 Overlap',
                interactive: true,
                title: '<img src="styles/legend/1105Overlap_6.png" /> 1105 Overlap'
            });
var format_1211Overlap_7 = new ol.format.GeoJSON();
var features_1211Overlap_7 = format_1211Overlap_7.readFeatures(json_1211Overlap_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1211Overlap_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1211Overlap_7.addFeatures(features_1211Overlap_7);
var lyr_1211Overlap_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1211Overlap_7, 
                style: style_1211Overlap_7,
                popuplayertitle: '1211 Overlap',
                interactive: true,
                title: '<img src="styles/legend/1211Overlap_7.png" /> 1211 Overlap'
            });
var format_1278PhotoEvidence_8 = new ol.format.GeoJSON();
var features_1278PhotoEvidence_8 = format_1278PhotoEvidence_8.readFeatures(json_1278PhotoEvidence_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1278PhotoEvidence_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1278PhotoEvidence_8.addFeatures(features_1278PhotoEvidence_8);
var lyr_1278PhotoEvidence_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1278PhotoEvidence_8, 
                style: style_1278PhotoEvidence_8,
                popuplayertitle: '1278 Photo Evidence',
                interactive: true,
                title: '<img src="styles/legend/1278PhotoEvidence_8.png" /> 1278 Photo Evidence'
            });
var format_1278DamagesPoints_9 = new ol.format.GeoJSON();
var features_1278DamagesPoints_9 = format_1278DamagesPoints_9.readFeatures(json_1278DamagesPoints_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1278DamagesPoints_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1278DamagesPoints_9.addFeatures(features_1278DamagesPoints_9);
var lyr_1278DamagesPoints_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1278DamagesPoints_9, 
                style: style_1278DamagesPoints_9,
                popuplayertitle: '1278 Damages Points',
                interactive: true,
                title: '<img src="styles/legend/1278DamagesPoints_9.png" /> 1278 Damages Points'
            });
var format_1278DamagesLines_10 = new ol.format.GeoJSON();
var features_1278DamagesLines_10 = format_1278DamagesLines_10.readFeatures(json_1278DamagesLines_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1278DamagesLines_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1278DamagesLines_10.addFeatures(features_1278DamagesLines_10);
var lyr_1278DamagesLines_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1278DamagesLines_10, 
                style: style_1278DamagesLines_10,
                popuplayertitle: '1278 Damages Lines',
                interactive: true,
                title: '<img src="styles/legend/1278DamagesLines_10.png" /> 1278 Damages Lines'
            });
var group_1278UnsealedDamage = new ol.layer.Group({
                                layers: [lyr_1278DamagesPoints_9,lyr_1278DamagesLines_10,],
                                fold: 'open',
                                title: '1278 Unsealed Damage'});
var group_1278PhotoEvidenceData = new ol.layer.Group({
                                layers: [lyr_1278PhotoEvidence_8,],
                                fold: 'open',
                                title: '1278 Photo Evidence Data'});
var group_OverlapResults = new ol.layer.Group({
                                layers: [lyr_1034P1Overlap_4,lyr_1034P4Overlap_5,lyr_1105Overlap_6,lyr_1211Overlap_7,],
                                fold: 'open',
                                title: 'Overlap Results'});
var group_200MeterSegmentsandChainages = new ol.layer.Group({
                                layers: [lyr_OSM200MeterSegmentswith1278Damages_2,lyr_OSM200MeterChainagewith1278Damages_3,],
                                fold: 'open',
                                title: '200 Meter Segments and Chainages'});
var group_UnsealedDamagePreviousPackages = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Unsealed Damage Previous Packages'});
var group_OSMRoadNetwork = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'OSM Road Network'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleRoad_0,lyr_GoogleHybrid_1,],
                                fold: 'open',
                                title: 'Basemap'});

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_OSM200MeterSegmentswith1278Damages_2.setVisible(true);lyr_OSM200MeterChainagewith1278Damages_3.setVisible(true);lyr_1034P1Overlap_4.setVisible(true);lyr_1034P4Overlap_5.setVisible(true);lyr_1105Overlap_6.setVisible(true);lyr_1211Overlap_7.setVisible(true);lyr_1278PhotoEvidence_8.setVisible(true);lyr_1278DamagesPoints_9.setVisible(true);lyr_1278DamagesLines_10.setVisible(true);
var layersList = [group_Basemap,group_200MeterSegmentsandChainages,group_OverlapResults,group_1278PhotoEvidenceData,group_1278UnsealedDamage];
lyr_OSM200MeterSegmentswith1278Damages_2.set('fieldAliases', {'fid': 'fid', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', });
lyr_OSM200MeterChainagewith1278Damages_3.set('fieldAliases', {'fid': 'fid', 'src_fid': 'src_fid', 'road_id': 'road_id', 'part': 'part', 'chainage': 'chainage', 'ch_label': 'ch_label', 'bnd_type': 'bnd_type', 'direction': 'direction', 'labels': 'labels', });
lyr_1034P1Overlap_4.set('fieldAliases', {'fid': 'fid', 'Damage': 'Damage', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'Length (m)': 'Length (m)', });
lyr_1034P4Overlap_5.set('fieldAliases', {'fid': 'fid', 'Damage': 'Damage', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'Length (m)': 'Length (m)', });
lyr_1105Overlap_6.set('fieldAliases', {'fid': 'fid', 'Damage': 'Damage', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'Length (m)': 'Length (m)', });
lyr_1211Overlap_7.set('fieldAliases', {'fid': 'fid', 'Damage': 'Damage', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'Length (m)': 'Length (m)', });
lyr_1278PhotoEvidence_8.set('fieldAliases', {'File Name': 'File Name', });
lyr_1278DamagesPoints_9.set('fieldAliases', {'fid': 'fid', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', });
lyr_1278DamagesLines_10.set('fieldAliases', {'fid': 'fid', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'route_cost': 'route_cost', });
lyr_OSM200MeterSegmentswith1278Damages_2.set('fieldImages', {'fid': 'TextEdit', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', });
lyr_OSM200MeterChainagewith1278Damages_3.set('fieldImages', {'fid': 'TextEdit', 'src_fid': 'TextEdit', 'road_id': 'TextEdit', 'part': 'TextEdit', 'chainage': 'TextEdit', 'ch_label': 'TextEdit', 'bnd_type': 'TextEdit', 'direction': 'TextEdit', 'labels': 'TextEdit', });
lyr_1034P1Overlap_4.set('fieldImages', {'fid': 'TextEdit', 'Damage': 'TextEdit', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_1034P4Overlap_5.set('fieldImages', {'fid': 'TextEdit', 'Damage': 'TextEdit', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_1105Overlap_6.set('fieldImages', {'fid': 'TextEdit', 'Damage': 'TextEdit', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_1211Overlap_7.set('fieldImages', {'fid': 'TextEdit', 'Damage': 'TextEdit', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_1278PhotoEvidence_8.set('fieldImages', {'File Name': 'TextEdit', });
lyr_1278DamagesPoints_9.set('fieldImages', {'fid': 'TextEdit', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', });
lyr_1278DamagesLines_10.set('fieldImages', {'fid': 'TextEdit', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'route_cost': 'TextEdit', });
lyr_OSM200MeterSegmentswith1278Damages_2.set('fieldLabels', {'fid': 'hidden field', 'Damage Num': 'hidden field', 'Asset ID': 'hidden field', 'Asset Name': 'hidden field', 'Chainage F': 'hidden field', 'Chainage T': 'hidden field', 'Latitude F': 'hidden field', 'Longitude': 'hidden field', 'Latitude T': 'hidden field', 'Longitud_1': 'hidden field', 'Chainage_1': 'hidden field', 'Chainage_2': 'hidden field', });
lyr_OSM200MeterChainagewith1278Damages_3.set('fieldLabels', {'fid': 'hidden field', 'src_fid': 'hidden field', 'road_id': 'hidden field', 'part': 'hidden field', 'chainage': 'hidden field', 'ch_label': 'hidden field', 'bnd_type': 'hidden field', 'direction': 'hidden field', 'labels': 'hidden field', });
lyr_1034P1Overlap_4.set('fieldLabels', {'fid': 'hidden field', 'Damage': 'inline label - always visible', 'Damage Num': 'hidden field', 'Asset ID': 'hidden field', 'Asset Name': 'hidden field', 'Chainage F': 'hidden field', 'Chainage T': 'hidden field', 'Latitude F': 'hidden field', 'Longitude': 'hidden field', 'Latitude T': 'hidden field', 'Longitud_1': 'hidden field', 'Chainage_1': 'hidden field', 'Chainage_2': 'hidden field', 'Length (m)': 'inline label - always visible', });
lyr_1034P4Overlap_5.set('fieldLabels', {'fid': 'hidden field', 'Damage': 'inline label - always visible', 'Damage Num': 'hidden field', 'Asset ID': 'hidden field', 'Asset Name': 'hidden field', 'Chainage F': 'hidden field', 'Chainage T': 'hidden field', 'Latitude F': 'hidden field', 'Longitude': 'hidden field', 'Latitude T': 'hidden field', 'Longitud_1': 'hidden field', 'Chainage_1': 'hidden field', 'Chainage_2': 'hidden field', 'Length (m)': 'inline label - always visible', });
lyr_1105Overlap_6.set('fieldLabels', {'fid': 'hidden field', 'Damage': 'inline label - always visible', 'Damage Num': 'hidden field', 'Asset ID': 'hidden field', 'Asset Name': 'hidden field', 'Chainage F': 'hidden field', 'Chainage T': 'hidden field', 'Latitude F': 'hidden field', 'Longitude': 'hidden field', 'Latitude T': 'hidden field', 'Longitud_1': 'hidden field', 'Chainage_1': 'hidden field', 'Chainage_2': 'hidden field', 'Length (m)': 'inline label - always visible', });
lyr_1211Overlap_7.set('fieldLabels', {'fid': 'hidden field', 'Damage': 'inline label - always visible', 'Damage Num': 'hidden field', 'Asset ID': 'hidden field', 'Asset Name': 'hidden field', 'Chainage F': 'hidden field', 'Chainage T': 'hidden field', 'Latitude F': 'hidden field', 'Longitude': 'hidden field', 'Latitude T': 'hidden field', 'Longitud_1': 'hidden field', 'Chainage_1': 'hidden field', 'Chainage_2': 'hidden field', 'Length (m)': 'inline label - always visible', });
lyr_1278PhotoEvidence_8.set('fieldLabels', {'File Name': 'no label', });
lyr_1278DamagesPoints_9.set('fieldLabels', {'fid': 'hidden field', 'Damage Num': 'inline label - always visible', 'Asset ID': 'inline label - always visible', 'Asset Name': 'inline label - always visible', 'Chainage F': 'inline label - always visible', 'Chainage T': 'inline label - always visible', 'Latitude F': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude T': 'inline label - always visible', 'Longitud_1': 'inline label - always visible', 'Chainage_1': 'inline label - always visible', 'Chainage_2': 'inline label - always visible', });
lyr_1278DamagesLines_10.set('fieldLabels', {'fid': 'hidden field', 'Damage Num': 'inline label - always visible', 'Asset ID': 'inline label - always visible', 'Asset Name': 'inline label - always visible', 'Chainage F': 'inline label - always visible', 'Chainage T': 'inline label - always visible', 'Latitude F': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude T': 'inline label - always visible', 'Longitud_1': 'inline label - always visible', 'Chainage_1': 'inline label - always visible', 'Chainage_2': 'inline label - always visible', 'route_cost': 'hidden field', });
lyr_1278DamagesLines_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});