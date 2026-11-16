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
var format_OSMSegments161126_2 = new ol.format.GeoJSON();
var features_OSMSegments161126_2 = format_OSMSegments161126_2.readFeatures(json_OSMSegments161126_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSMSegments161126_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSMSegments161126_2.addFeatures(features_OSMSegments161126_2);
var lyr_OSMSegments161126_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OSMSegments161126_2, 
                style: style_OSMSegments161126_2,
                popuplayertitle: 'OSM Segments 161126',
                interactive: false,
                title: '<img src="styles/legend/OSMSegments161126_2.png" /> OSM Segments 161126'
            });
var format_OSMChainage161126_3 = new ol.format.GeoJSON();
var features_OSMChainage161126_3 = format_OSMChainage161126_3.readFeatures(json_OSMChainage161126_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSMChainage161126_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OSMChainage161126_3.addFeatures(features_OSMChainage161126_3);
var lyr_OSMChainage161126_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OSMChainage161126_3, 
                style: style_OSMChainage161126_3,
                popuplayertitle: 'OSM Chainage 161126',
                interactive: false,
                title: '<img src="styles/legend/OSMChainage161126_3.png" /> OSM Chainage 161126'
            });
var format_1034P4Overlap161126_4 = new ol.format.GeoJSON();
var features_1034P4Overlap161126_4 = format_1034P4Overlap161126_4.readFeatures(json_1034P4Overlap161126_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1034P4Overlap161126_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1034P4Overlap161126_4.addFeatures(features_1034P4Overlap161126_4);
var lyr_1034P4Overlap161126_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1034P4Overlap161126_4, 
                style: style_1034P4Overlap161126_4,
                popuplayertitle: '1034 P4 Overlap 161126',
                interactive: true,
                title: '<img src="styles/legend/1034P4Overlap161126_4.png" /> 1034 P4 Overlap 161126'
            });
var format_1034P1Overlap161126_5 = new ol.format.GeoJSON();
var features_1034P1Overlap161126_5 = format_1034P1Overlap161126_5.readFeatures(json_1034P1Overlap161126_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1034P1Overlap161126_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1034P1Overlap161126_5.addFeatures(features_1034P1Overlap161126_5);
var lyr_1034P1Overlap161126_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1034P1Overlap161126_5, 
                style: style_1034P1Overlap161126_5,
                popuplayertitle: '1034 P1 Overlap 161126',
                interactive: true,
                title: '<img src="styles/legend/1034P1Overlap161126_5.png" /> 1034 P1 Overlap 161126'
            });
var format_1105Overlap161126_6 = new ol.format.GeoJSON();
var features_1105Overlap161126_6 = format_1105Overlap161126_6.readFeatures(json_1105Overlap161126_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1105Overlap161126_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1105Overlap161126_6.addFeatures(features_1105Overlap161126_6);
var lyr_1105Overlap161126_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1105Overlap161126_6, 
                style: style_1105Overlap161126_6,
                popuplayertitle: '1105 Overlap 161126',
                interactive: true,
                title: '<img src="styles/legend/1105Overlap161126_6.png" /> 1105 Overlap 161126'
            });
var format_1211Overlap161126_7 = new ol.format.GeoJSON();
var features_1211Overlap161126_7 = format_1211Overlap161126_7.readFeatures(json_1211Overlap161126_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1211Overlap161126_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1211Overlap161126_7.addFeatures(features_1211Overlap161126_7);
var lyr_1211Overlap161126_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1211Overlap161126_7, 
                style: style_1211Overlap161126_7,
                popuplayertitle: '1211 Overlap 161126',
                interactive: true,
                title: '<img src="styles/legend/1211Overlap161126_7.png" /> 1211 Overlap 161126'
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
var format_1278DamagesPoints161126_9 = new ol.format.GeoJSON();
var features_1278DamagesPoints161126_9 = format_1278DamagesPoints161126_9.readFeatures(json_1278DamagesPoints161126_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1278DamagesPoints161126_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1278DamagesPoints161126_9.addFeatures(features_1278DamagesPoints161126_9);
var lyr_1278DamagesPoints161126_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1278DamagesPoints161126_9, 
                style: style_1278DamagesPoints161126_9,
                popuplayertitle: '1278 Damages Points 161126',
                interactive: true,
                title: '<img src="styles/legend/1278DamagesPoints161126_9.png" /> 1278 Damages Points 161126'
            });
var format_1278Damages161126_10 = new ol.format.GeoJSON();
var features_1278Damages161126_10 = format_1278Damages161126_10.readFeatures(json_1278Damages161126_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1278Damages161126_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1278Damages161126_10.addFeatures(features_1278Damages161126_10);
var lyr_1278Damages161126_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1278Damages161126_10, 
                style: style_1278Damages161126_10,
                popuplayertitle: '1278 Damages 161126',
                interactive: true,
                title: '<img src="styles/legend/1278Damages161126_10.png" /> 1278 Damages 161126'
            });
var group_1278UnsealedDamage = new ol.layer.Group({
                                layers: [lyr_1278DamagesPoints161126_9,lyr_1278Damages161126_10,],
                                fold: 'open',
                                title: '1278 Unsealed Damage'});
var group_1278PhotoEvidenceData = new ol.layer.Group({
                                layers: [lyr_1278PhotoEvidence_8,],
                                fold: 'open',
                                title: '1278 Photo Evidence Data'});
var group_OverlapResults = new ol.layer.Group({
                                layers: [lyr_1034P4Overlap161126_4,lyr_1034P1Overlap161126_5,lyr_1105Overlap161126_6,lyr_1211Overlap161126_7,],
                                fold: 'open',
                                title: 'Overlap Results'});
var group_200MeterSegmentsandChainages = new ol.layer.Group({
                                layers: [lyr_OSMSegments161126_2,lyr_OSMChainage161126_3,],
                                fold: 'open',
                                title: '200 Meter Segments and Chainages'});
var group_UnsealedDamagePreviousPackages = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Unsealed Damage Previous Packages'});
var group_OSMRoadNetwork = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'OSM Road Network'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleRoad_0,lyr_GoogleHybrid_1,],
                                fold: 'open',
                                title: 'Basemap'});

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_OSMSegments161126_2.setVisible(true);lyr_OSMChainage161126_3.setVisible(true);lyr_1034P4Overlap161126_4.setVisible(true);lyr_1034P1Overlap161126_5.setVisible(true);lyr_1105Overlap161126_6.setVisible(true);lyr_1211Overlap161126_7.setVisible(true);lyr_1278PhotoEvidence_8.setVisible(true);lyr_1278DamagesPoints161126_9.setVisible(true);lyr_1278Damages161126_10.setVisible(true);
var layersList = [group_Basemap,group_200MeterSegmentsandChainages,group_OverlapResults,group_1278PhotoEvidenceData,group_1278UnsealedDamage];
lyr_OSMSegments161126_2.set('fieldAliases', {'orig_fid': 'orig_fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'step_count': 'step_count', 'handrail': 'handrail', 'incline': 'incline', 'handrail_b': 'handrail_b', 'note_name': 'note_name', 'name_aus': 'name_aus', 'traffic_ca': 'traffic_ca', 'informal': 'informal', 'leisure': 'leisure', 'name_wyb': 'name_wyb', 'trail_visi': 'trail_visi', 'name_drl': 'name_drl', 'hiking_sca': 'hiking_sca', 'wikidata': 'wikidata', 'usage': 'usage', 'railway': 'railway', 'gauge': 'gauge', 'end_date': 'end_date', 'designatio': 'designatio', 'abandoned_': 'abandoned_', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'psv': 'psv', 'maxspeed_f': 'maxspeed_f', 'indoor': 'indoor', 'crossing_i': 'crossing_i', 'crossing_m': 'crossing_m', 'crossing': 'crossing', 'footway': 'footway', 'cycleway_l': 'cycleway_l', 'proposed': 'proposed', 'source_acc': 'source_acc', 'motor_ve_1': 'motor_ve_1', 'width': 'width', 'tracktype': 'tracktype', 'source_bri': 'source_bri', 'source_b_1': 'source_b_1', 'bridge_str': 'bridge_str', 'source_hig': 'source_hig', 'foot': 'foot', 'priority': 'priority', 'smoothness': 'smoothness', 'surface_gr': 'surface_gr', 'bicycle': 'bicycle', '4wd_only': '4wd_only', 'source_old': 'source_old', 'dry_weathe': 'dry_weathe', 'embankment': 'embankment', 'flood_pron': 'flood_pron', 'junction': 'junction', 'descriptio': 'descriptio', 'hgv': 'hgv', 'waterway': 'waterway', 'access': 'access', 'maxspeed_b': 'maxspeed_b', 'bridge_nam': 'bridge_nam', 'surface__1': 'surface__1', 'layer': 'layer', 'bridge': 'bridge', 'covered': 'covered', 'source_alt': 'source_alt', 'noname': 'noname', 'access_con': 'access_con', 'source_ref': 'source_ref', 'source_geo': 'source_geo', 'maxspeed_c': 'maxspeed_c', 'hazard': 'hazard', 'operator_t': 'operator_t', 'operator': 'operator', 'old_name': 'old_name', 'service': 'service', 'maxspeed_t': 'maxspeed_t', 'ford': 'ford', 'comment': 'comment', 'source_nam': 'source_nam', 'comment_2': 'comment_2', 'source_n_1': 'source_n_1', 'admin_ref': 'admin_ref', 'old_ref': 'old_ref', 'old_networ': 'old_networ', 'oneway': 'oneway', 'surface': 'surface', 'ref': 'ref', 'network': 'network', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'cycleway': 'cycleway', 'alt_name': 'alt_name', 'part': 'part', 'ch_start': 'ch_start', 'ch_end': 'ch_end', 'ch_from': 'ch_from', 'ch_to': 'ch_to', 'seg_len': 'seg_len', 'direction': 'direction', 'n_points': 'n_points', 'pt_ids': 'pt_ids', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', });
lyr_OSMChainage161126_3.set('fieldAliases', {'src_fid': 'src_fid', 'road_id': 'road_id', 'part': 'part', 'chainage': 'chainage', 'ch_label': 'ch_label', 'bnd_type': 'bnd_type', 'direction': 'direction', 'label': 'label', });
lyr_1034P4Overlap161126_4.set('fieldAliases', {'Damage/Ite': 'Damage/Ite', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'Length (m)': 'Length (m)', });
lyr_1034P1Overlap161126_5.set('fieldAliases', {'Damage/Ite': 'Damage/Ite', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'Length (m)': 'Length (m)', });
lyr_1105Overlap161126_6.set('fieldAliases', {'Damage/Ite': 'Damage/Ite', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'Length (m)': 'Length (m)', });
lyr_1211Overlap161126_7.set('fieldAliases', {'Damage/Ite': 'Damage/Ite', 'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'Length (m)': 'Length (m)', });
lyr_1278PhotoEvidence_8.set('fieldAliases', {'File Name': 'File Name', });
lyr_1278DamagesPoints161126_9.set('fieldAliases', {'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', });
lyr_1278Damages161126_10.set('fieldAliases', {'Damage Num': 'Damage Num', 'Asset ID': 'Asset ID', 'Asset Name': 'Asset Name', 'Chainage F': 'Chainage F', 'Chainage T': 'Chainage T', 'Latitude F': 'Latitude F', 'Longitude': 'Longitude', 'Latitude T': 'Latitude T', 'Longitud_1': 'Longitud_1', 'Chainage_1': 'Chainage_1', 'Chainage_2': 'Chainage_2', 'route_cost': 'route_cost', });
lyr_OSMSegments161126_2.set('fieldImages', {'orig_fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'step_count': '', 'handrail': '', 'incline': '', 'handrail_b': '', 'note_name': '', 'name_aus': '', 'traffic_ca': '', 'informal': '', 'leisure': '', 'name_wyb': '', 'trail_visi': '', 'name_drl': '', 'hiking_sca': '', 'wikidata': '', 'usage': '', 'railway': '', 'gauge': '', 'end_date': '', 'designatio': '', 'abandoned_': '', 'motor_vehi': '', 'horse': '', 'psv': '', 'maxspeed_f': '', 'indoor': '', 'crossing_i': '', 'crossing_m': '', 'crossing': '', 'footway': '', 'cycleway_l': '', 'proposed': '', 'source_acc': '', 'motor_ve_1': '', 'width': '', 'tracktype': '', 'source_bri': '', 'source_b_1': '', 'bridge_str': '', 'source_hig': '', 'foot': '', 'priority': '', 'smoothness': '', 'surface_gr': '', 'bicycle': '', '4wd_only': '', 'source_old': '', 'dry_weathe': '', 'embankment': '', 'flood_pron': '', 'junction': '', 'descriptio': '', 'hgv': '', 'waterway': '', 'access': '', 'maxspeed_b': '', 'bridge_nam': '', 'surface__1': '', 'layer': '', 'bridge': '', 'covered': '', 'source_alt': '', 'noname': '', 'access_con': '', 'source_ref': '', 'source_geo': '', 'maxspeed_c': '', 'hazard': '', 'operator_t': '', 'operator': '', 'old_name': '', 'service': '', 'maxspeed_t': '', 'ford': '', 'comment': '', 'source_nam': '', 'comment_2': '', 'source_n_1': '', 'admin_ref': '', 'old_ref': '', 'old_networ': '', 'oneway': '', 'surface': '', 'ref': '', 'network': '', 'name': '', 'maxspeed': '', 'lanes': '', 'cycleway': '', 'alt_name': '', 'part': '', 'ch_start': '', 'ch_end': '', 'ch_from': '', 'ch_to': '', 'seg_len': '', 'direction': '', 'n_points': '', 'pt_ids': '', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'n': '', 'distance': '', 'feature_x': '', 'feature_y': '', 'nearest_x': '', 'nearest_y': '', });
lyr_OSMChainage161126_3.set('fieldImages', {'src_fid': 'TextEdit', 'road_id': 'TextEdit', 'part': 'Range', 'chainage': 'TextEdit', 'ch_label': 'TextEdit', 'bnd_type': 'TextEdit', 'direction': 'TextEdit', 'label': 'TextEdit', });
lyr_1034P4Overlap161126_4.set('fieldImages', {'Damage/Ite': '', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_1034P1Overlap161126_5.set('fieldImages', {'Damage/Ite': '', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_1105Overlap161126_6.set('fieldImages', {'Damage/Ite': '', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_1211Overlap161126_7.set('fieldImages', {'Damage/Ite': '', 'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'Length (m)': 'TextEdit', });
lyr_1278PhotoEvidence_8.set('fieldImages', {'File Name': 'TextEdit', });
lyr_1278DamagesPoints161126_9.set('fieldImages', {'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', });
lyr_1278Damages161126_10.set('fieldImages', {'Damage Num': 'TextEdit', 'Asset ID': 'TextEdit', 'Asset Name': 'TextEdit', 'Chainage F': 'TextEdit', 'Chainage T': 'TextEdit', 'Latitude F': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude T': 'TextEdit', 'Longitud_1': 'TextEdit', 'Chainage_1': 'TextEdit', 'Chainage_2': 'TextEdit', 'route_cost': 'TextEdit', });
lyr_OSMSegments161126_2.set('fieldLabels', {'orig_fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'step_count': 'no label', 'handrail': 'no label', 'incline': 'no label', 'handrail_b': 'no label', 'note_name': 'no label', 'name_aus': 'no label', 'traffic_ca': 'no label', 'informal': 'no label', 'leisure': 'no label', 'name_wyb': 'no label', 'trail_visi': 'no label', 'name_drl': 'no label', 'hiking_sca': 'no label', 'wikidata': 'no label', 'usage': 'no label', 'railway': 'no label', 'gauge': 'no label', 'end_date': 'no label', 'designatio': 'no label', 'abandoned_': 'no label', 'motor_vehi': 'no label', 'horse': 'no label', 'psv': 'no label', 'maxspeed_f': 'no label', 'indoor': 'no label', 'crossing_i': 'no label', 'crossing_m': 'no label', 'crossing': 'no label', 'footway': 'no label', 'cycleway_l': 'no label', 'proposed': 'no label', 'source_acc': 'no label', 'motor_ve_1': 'no label', 'width': 'no label', 'tracktype': 'no label', 'source_bri': 'no label', 'source_b_1': 'no label', 'bridge_str': 'no label', 'source_hig': 'no label', 'foot': 'no label', 'priority': 'no label', 'smoothness': 'no label', 'surface_gr': 'no label', 'bicycle': 'no label', '4wd_only': 'no label', 'source_old': 'no label', 'dry_weathe': 'no label', 'embankment': 'no label', 'flood_pron': 'no label', 'junction': 'no label', 'descriptio': 'no label', 'hgv': 'no label', 'waterway': 'no label', 'access': 'no label', 'maxspeed_b': 'no label', 'bridge_nam': 'no label', 'surface__1': 'no label', 'layer': 'no label', 'bridge': 'no label', 'covered': 'no label', 'source_alt': 'no label', 'noname': 'no label', 'access_con': 'no label', 'source_ref': 'no label', 'source_geo': 'no label', 'maxspeed_c': 'no label', 'hazard': 'no label', 'operator_t': 'no label', 'operator': 'no label', 'old_name': 'no label', 'service': 'no label', 'maxspeed_t': 'no label', 'ford': 'no label', 'comment': 'no label', 'source_nam': 'no label', 'comment_2': 'no label', 'source_n_1': 'no label', 'admin_ref': 'no label', 'old_ref': 'no label', 'old_networ': 'no label', 'oneway': 'no label', 'surface': 'no label', 'ref': 'no label', 'network': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'cycleway': 'no label', 'alt_name': 'no label', 'part': 'no label', 'ch_start': 'no label', 'ch_end': 'no label', 'ch_from': 'no label', 'ch_to': 'no label', 'seg_len': 'no label', 'direction': 'no label', 'n_points': 'no label', 'pt_ids': 'no label', 'Damage Num': 'no label', 'Asset ID': 'no label', 'Asset Name': 'no label', 'Chainage F': 'no label', 'Chainage T': 'no label', 'Latitude F': 'no label', 'Longitude': 'no label', 'Latitude T': 'no label', 'Longitud_1': 'no label', 'Chainage_1': 'no label', 'Chainage_2': 'no label', 'n': 'no label', 'distance': 'no label', 'feature_x': 'no label', 'feature_y': 'no label', 'nearest_x': 'no label', 'nearest_y': 'no label', });
lyr_OSMChainage161126_3.set('fieldLabels', {'src_fid': 'no label', 'road_id': 'no label', 'part': 'no label', 'chainage': 'no label', 'ch_label': 'no label', 'bnd_type': 'no label', 'direction': 'no label', 'label': 'no label', });
lyr_1034P4Overlap161126_4.set('fieldLabels', {'Damage/Ite': 'inline label - always visible', 'Damage Num': 'hidden field', 'Asset ID': 'hidden field', 'Asset Name': 'hidden field', 'Chainage F': 'hidden field', 'Chainage T': 'hidden field', 'Latitude F': 'hidden field', 'Longitude': 'hidden field', 'Latitude T': 'hidden field', 'Longitud_1': 'hidden field', 'Chainage_1': 'hidden field', 'Chainage_2': 'hidden field', 'Length (m)': 'inline label - always visible', });
lyr_1034P1Overlap161126_5.set('fieldLabels', {'Damage/Ite': 'inline label - always visible', 'Damage Num': 'hidden field', 'Asset ID': 'hidden field', 'Asset Name': 'hidden field', 'Chainage F': 'hidden field', 'Chainage T': 'hidden field', 'Latitude F': 'hidden field', 'Longitude': 'hidden field', 'Latitude T': 'hidden field', 'Longitud_1': 'hidden field', 'Chainage_1': 'hidden field', 'Chainage_2': 'hidden field', 'Length (m)': 'inline label - always visible', });
lyr_1105Overlap161126_6.set('fieldLabels', {'Damage/Ite': 'inline label - always visible', 'Damage Num': 'hidden field', 'Asset ID': 'hidden field', 'Asset Name': 'hidden field', 'Chainage F': 'hidden field', 'Chainage T': 'hidden field', 'Latitude F': 'hidden field', 'Longitude': 'hidden field', 'Latitude T': 'hidden field', 'Longitud_1': 'hidden field', 'Chainage_1': 'hidden field', 'Chainage_2': 'hidden field', 'Length (m)': 'inline label - always visible', });
lyr_1211Overlap161126_7.set('fieldLabels', {'Damage/Ite': 'inline label - always visible', 'Damage Num': 'hidden field', 'Asset ID': 'hidden field', 'Asset Name': 'hidden field', 'Chainage F': 'hidden field', 'Chainage T': 'hidden field', 'Latitude F': 'hidden field', 'Longitude': 'hidden field', 'Latitude T': 'hidden field', 'Longitud_1': 'hidden field', 'Chainage_1': 'hidden field', 'Chainage_2': 'hidden field', 'Length (m)': 'inline label - always visible', });
lyr_1278PhotoEvidence_8.set('fieldLabels', {'File Name': 'no label', });
lyr_1278DamagesPoints161126_9.set('fieldLabels', {'Damage Num': 'inline label - always visible', 'Asset ID': 'inline label - always visible', 'Asset Name': 'inline label - always visible', 'Chainage F': 'inline label - always visible', 'Chainage T': 'inline label - always visible', 'Latitude F': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude T': 'inline label - always visible', 'Longitud_1': 'inline label - always visible', 'Chainage_1': 'inline label - always visible', 'Chainage_2': 'inline label - always visible', });
lyr_1278Damages161126_10.set('fieldLabels', {'Damage Num': 'inline label - always visible', 'Asset ID': 'inline label - always visible', 'Asset Name': 'inline label - always visible', 'Chainage F': 'inline label - always visible', 'Chainage T': 'inline label - always visible', 'Latitude F': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude T': 'inline label - always visible', 'Longitud_1': 'inline label - always visible', 'Chainage_1': 'inline label - always visible', 'Chainage_2': 'inline label - always visible', 'route_cost': 'hidden field', });
lyr_1278Damages161126_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});