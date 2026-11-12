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
var format_OSMSegments_2 = new ol.format.GeoJSON();
var features_OSMSegments_2 = format_OSMSegments_2.readFeatures(json_OSMSegments_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSMSegments_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSMSegments_2.addFeatures(features_OSMSegments_2);
var lyr_OSMSegments_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OSMSegments_2, 
                style: style_OSMSegments_2,
                popuplayertitle: 'OSM Segments',
                interactive: false,
                title: '<img src="styles/legend/OSMSegments_2.png" /> OSM Segments'
            });
var format_OSMChainage_3 = new ol.format.GeoJSON();
var features_OSMChainage_3 = format_OSMChainage_3.readFeatures(json_OSMChainage_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSMChainage_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSMChainage_3.addFeatures(features_OSMChainage_3);
var lyr_OSMChainage_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OSMChainage_3, 
                style: style_OSMChainage_3,
                popuplayertitle: 'OSM Chainage',
                interactive: false,
                title: '<img src="styles/legend/OSMChainage_3.png" /> OSM Chainage'
            });
var format_1034P4Overlap_4 = new ol.format.GeoJSON();
var features_1034P4Overlap_4 = format_1034P4Overlap_4.readFeatures(json_1034P4Overlap_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1034P4Overlap_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1034P4Overlap_4.addFeatures(features_1034P4Overlap_4);
var lyr_1034P4Overlap_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1034P4Overlap_4, 
                style: style_1034P4Overlap_4,
                popuplayertitle: '1034 P4 Overlap',
                interactive: true,
                title: '<img src="styles/legend/1034P4Overlap_4.png" /> 1034 P4 Overlap'
            });
var format_1034P1Overlap_5 = new ol.format.GeoJSON();
var features_1034P1Overlap_5 = format_1034P1Overlap_5.readFeatures(json_1034P1Overlap_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1034P1Overlap_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1034P1Overlap_5.addFeatures(features_1034P1Overlap_5);
var lyr_1034P1Overlap_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1034P1Overlap_5, 
                style: style_1034P1Overlap_5,
                popuplayertitle: '1034 P1 Overlap',
                interactive: true,
                title: '<img src="styles/legend/1034P1Overlap_5.png" /> 1034 P1 Overlap'
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
var format_1278Damages121126_9 = new ol.format.GeoJSON();
var features_1278Damages121126_9 = format_1278Damages121126_9.readFeatures(json_1278Damages121126_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1278Damages121126_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1278Damages121126_9.addFeatures(features_1278Damages121126_9);
var lyr_1278Damages121126_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1278Damages121126_9, 
                style: style_1278Damages121126_9,
                popuplayertitle: '1278 Damages 121126',
                interactive: true,
                title: '<img src="styles/legend/1278Damages121126_9.png" /> 1278 Damages 121126'
            });
var format_1278PointDamages121126_10 = new ol.format.GeoJSON();
var features_1278PointDamages121126_10 = format_1278PointDamages121126_10.readFeatures(json_1278PointDamages121126_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1278PointDamages121126_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1278PointDamages121126_10.addFeatures(features_1278PointDamages121126_10);
var lyr_1278PointDamages121126_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1278PointDamages121126_10, 
                style: style_1278PointDamages121126_10,
                popuplayertitle: '1278 Point Damages 121126',
                interactive: true,
                title: '<img src="styles/legend/1278PointDamages121126_10.png" /> 1278 Point Damages 121126'
            });
var group_1278UnsealedDamage = new ol.layer.Group({
                                layers: [lyr_1278Damages121126_9,lyr_1278PointDamages121126_10,],
                                fold: 'open',
                                title: '1278 Unsealed Damage'});
var group_1278PhotoEvidenceData = new ol.layer.Group({
                                layers: [lyr_1278PhotoEvidence_8,],
                                fold: 'open',
                                title: '1278 Photo Evidence Data'});
var group_OverlapResults = new ol.layer.Group({
                                layers: [lyr_1034P4Overlap_4,lyr_1034P1Overlap_5,lyr_1105Overlap_6,lyr_1211Overlap_7,],
                                fold: 'open',
                                title: 'Overlap Results'});
var group_200MeterSegmentsandChainages = new ol.layer.Group({
                                layers: [lyr_OSMSegments_2,lyr_OSMChainage_3,],
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

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_OSMSegments_2.setVisible(true);lyr_OSMChainage_3.setVisible(true);lyr_1034P4Overlap_4.setVisible(true);lyr_1034P1Overlap_5.setVisible(true);lyr_1105Overlap_6.setVisible(true);lyr_1211Overlap_7.setVisible(true);lyr_1278PhotoEvidence_8.setVisible(true);lyr_1278Damages121126_9.setVisible(true);lyr_1278PointDamages121126_10.setVisible(true);
var layersList = [group_Basemap,group_200MeterSegmentsandChainages,group_OverlapResults,group_1278PhotoEvidenceData,group_1278UnsealedDamage];
lyr_OSMSegments_2.set('fieldAliases', {'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', });
lyr_OSMChainage_3.set('fieldAliases', {'fid': 'fid', 'src_fid': 'src_fid', 'road_id': 'road_id', 'part': 'part', 'chainage': 'chainage', 'ch_label': 'ch_label', 'bnd_type': 'bnd_type', 'direction': 'direction', 'label': 'label', });
lyr_1034P4Overlap_4.set('fieldAliases', {'fid': 'fid', 'Damage': 'Damage', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'Length (m)': 'Length (m)', });
lyr_1034P1Overlap_5.set('fieldAliases', {'fid': 'fid', 'Damage': 'Damage', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'Length (m)': 'Length (m)', });
lyr_1105Overlap_6.set('fieldAliases', {'fid': 'fid', 'Damage': 'Damage', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'Length (m)': 'Length (m)', });
lyr_1211Overlap_7.set('fieldAliases', {'fid': 'fid', 'Damage': 'Damage', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'Length (m)': 'Length (m)', });
lyr_1278PhotoEvidence_8.set('fieldAliases', {'File Name': 'File Name', });
lyr_1278Damages121126_9.set('fieldAliases', {'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'route_cost': 'route_cost', });
lyr_1278PointDamages121126_10.set('fieldAliases', {'fid': 'fid', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', });
lyr_OSMSegments_2.set('fieldImages', {'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', });
lyr_OSMChainage_3.set('fieldImages', {'fid': 'TextEdit', 'src_fid': 'TextEdit', 'road_id': 'TextEdit', 'part': 'Range', 'chainage': 'TextEdit', 'ch_label': 'TextEdit', 'bnd_type': 'TextEdit', 'direction': 'TextEdit', 'label': 'TextEdit', });
lyr_1034P4Overlap_4.set('fieldImages', {'fid': 'TextEdit', 'Damage': 'TextEdit', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_1034P1Overlap_5.set('fieldImages', {'fid': 'TextEdit', 'Damage': 'TextEdit', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_1105Overlap_6.set('fieldImages', {'fid': 'TextEdit', 'Damage': 'TextEdit', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_1211Overlap_7.set('fieldImages', {'fid': 'TextEdit', 'Damage': 'TextEdit', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_1278PhotoEvidence_8.set('fieldImages', {'File Name': 'TextEdit', });
lyr_1278Damages121126_9.set('fieldImages', {'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'route_cost': 'TextEdit', });
lyr_1278PointDamages121126_10.set('fieldImages', {'fid': 'TextEdit', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', });
lyr_OSMSegments_2.set('fieldLabels', {'Damage Num': 'no label', 'Asset ID': 'no label', 'Asset Name': 'no label', 'Chainage F': 'no label', 'Chainage T': 'no label', 'Latitude F': 'no label', 'Longitude': 'no label', 'Latitude T': 'no label', 'Longitud_1': 'no label', 'Chainage_1': 'no label', 'Chainage_2': 'no label', });
lyr_OSMChainage_3.set('fieldLabels', {'fid': 'no label', 'src_fid': 'no label', 'road_id': 'no label', 'part': 'no label', 'chainage': 'no label', 'ch_label': 'no label', 'bnd_type': 'no label', 'direction': 'no label', 'label': 'no label', });
lyr_1034P4Overlap_4.set('fieldLabels', {'fid': 'hidden field', 'Damage': 'inline label - always visible', 'Damage Num': 'hidden field', 'Asset ID': 'hidden field', 'Asset Name': 'hidden field', 'Chainage F': 'hidden field', 'Chainage T': 'hidden field', 'Latitude F': 'hidden field', 'Longitude': 'hidden field', 'Latitude T': 'hidden field', 'Longitud_1': 'hidden field', 'Chainage_1': 'hidden field', 'Chainage_2': 'hidden field', 'Length (m)': 'inline label - always visible', });
lyr_1034P1Overlap_5.set('fieldLabels', {'fid': 'hidden field', 'Damage': 'inline label - always visible', 'Damage Num': 'hidden field', 'Asset ID': 'hidden field', 'Asset Name': 'hidden field', 'Chainage F': 'hidden field', 'Chainage T': 'hidden field', 'Latitude F': 'hidden field', 'Longitude': 'hidden field', 'Latitude T': 'hidden field', 'Longitud_1': 'hidden field', 'Chainage_1': 'hidden field', 'Chainage_2': 'hidden field', 'Length (m)': 'inline label - always visible', });
lyr_1105Overlap_6.set('fieldLabels', {'fid': 'hidden field', 'Damage': 'inline label - always visible', 'Damage Num': 'hidden field', 'Asset ID': 'hidden field', 'Asset Name': 'hidden field', 'Chainage F': 'hidden field', 'Chainage T': 'hidden field', 'Latitude F': 'hidden field', 'Longitude': 'hidden field', 'Latitude T': 'hidden field', 'Longitud_1': 'hidden field', 'Chainage_1': 'hidden field', 'Chainage_2': 'hidden field', 'Length (m)': 'inline label - always visible', });
lyr_1211Overlap_7.set('fieldLabels', {'fid': 'hidden field', 'Damage': 'inline label - always visible', 'Damage Num': 'hidden field', 'Asset ID': 'hidden field', 'Asset Name': 'hidden field', 'Chainage F': 'hidden field', 'Chainage T': 'hidden field', 'Latitude F': 'hidden field', 'Longitude': 'hidden field', 'Latitude T': 'hidden field', 'Longitud_1': 'hidden field', 'Chainage_1': 'hidden field', 'Chainage_2': 'hidden field', 'Length (m)': 'inline label - always visible', });
lyr_1278PhotoEvidence_8.set('fieldLabels', {'File Name': 'no label', });
lyr_1278Damages121126_9.set('fieldLabels', {'Damage Num': 'inline label - always visible', 'Asset ID': 'inline label - always visible', 'Asset Name': 'inline label - always visible', 'Chainage F': 'inline label - always visible', 'Chainage T': 'inline label - always visible', 'Latitude F': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude T': 'inline label - always visible', 'Longitud_1': 'inline label - always visible', 'Chainage_1': 'inline label - always visible', 'Chainage_2': 'inline label - always visible', 'route_cost': 'hidden field', });
lyr_1278PointDamages121126_10.set('fieldLabels', {'fid': 'hidden field', 'Damage Num': 'inline label - always visible', 'Asset ID': 'inline label - always visible', 'Asset Name': 'inline label - always visible', 'Chainage F': 'inline label - always visible', 'Chainage T': 'inline label - always visible', 'Latitude F': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude T': 'inline label - always visible', 'Longitud_1': 'inline label - always visible', 'Chainage_1': 'inline label - always visible', 'Chainage_2': 'inline label - always visible', });
lyr_1278PointDamages121126_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});