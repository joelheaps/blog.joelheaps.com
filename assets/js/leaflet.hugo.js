let leafletMapsObj = {};
let leafletMarkersObj = {};

function drawTrack(trackOpts, elevationOpts, markerOpts) {
    var opts = {
        elevationControl: {
            options: {
                position: elevationOpts.graphPosition,
                theme: elevationOpts.graphTheme,
                width: elevationOpts.graphWidth,
                height: elevationOpts.graphHeight,
                margins: {
                    top: 20,
                    right: 20,
                    bottom: 35,
                    left: 50
                },
                followMarker: elevationOpts.graphFollowMarker,
                collapsed: elevationOpts.graphCollapsed,
                detached: elevationOpts.graphDetached,
                legend: false,
                summary: false,
                downloadLink: true,
                gpxOptions: {
                    polyline_options: {
                        className: 'track-' + trackOpts.trackId + '-',
                        color: trackOpts.lineColor,
                        opacity: trackOpts.lineOpacity,
                        weight: trackOpts.lineWeight,
                    },
                    marker_options: {
                        startIcon: new L.ExtraMarkers.icon({
                            icon: markerOpts.iconStart,
                            markerColor: markerOpts.iconStartColor,
                            shape: markerOpts.iconStartShape,
                            prefix: 'fa',
                            extraClasses: markerOpts.iconStartClasses
                        }),
                        endIcon: new L.ExtraMarkers.icon({
                            icon: markerOpts.iconEnd,
                            markerColor: markerOpts.iconEndColor,
                            shape: markerOpts.iconEndShape,
                            prefix: 'fa',
                            extraClasses: markerOpts.iconEndClasses
                        }),
                        wptIcons: {
                            '': new L.ExtraMarkers.icon({
                                icon: markerOpts.icon,
                                markerColor: markerOpts.iconColor,
                                shape: markerOpts.iconShape,
                                prefix: 'fa',
                                extraClasses:  markerOpts.iconClasses,
                            })
                        }
                    }
                },

            },
        },
    };

    L.control.elevation(opts.elevationControl.options).addTo(leafletMapsObj[trackOpts.mapId]).load(trackOpts.trackPath);

    /*map.on('eledata_loaded', function(e) {
        track = e.track_info;
    });*/
}

function downloadFile(fileUrl) {
    const anchorElement = document.createElement('a');
    anchorElement.href = fileUrl;
    anchorElement.target = '_blank';
    anchorElement.download = fileUrl.split('/').pop();
    anchorElement.style.display = 'none';
    
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
}