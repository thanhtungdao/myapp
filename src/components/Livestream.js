import React, { Component } from 'react';
import './Livestream.css';
import { withAuthenticator } from 'aws-amplify-react';

class Livestream extends React.Component {

    render() {
        return (
            <div align="center" className="liveVideoDiv">
                <h1>Live Now</h1>
                <video className="liveVideo" controls autoPlay>
                    <source src="https://manifest.googlevideo.com/api/manifest/hls_playlist/expire/1572378018/ei/QkG4XcaUHsSM8gP-66e4AQ/ip/144.91.70.192/id/nu3iXDR7iXo.0/itag/94/source/yt_live_broadcast/requiressl/yes/ratebypass/yes/live/1/goi/160/sgoap/gir%3Dyes%3Bitag%3D140/sgovp/gir%3Dyes%3Bitag%3D135/hls_chunk_host/r1---sn-p5qlsnd6.googlevideo.com/playlist_duration/30/manifest_duration/30/playlist_type/DVR/mm/44/mn/sn-p5qlsnd6/ms/lva/mv/u/mvi/0/pl/23/dover/11/keepalive/yes/fexp/23842630/mt/1572356085/disable_polymer/true/sparams/expire,ei,ip,id,itag,source,requiressl,ratebypass,live,goi,sgoap,sgovp,playlist_duration,manifest_duration,playlist_type/sig/ALgxI2wwRQIgZtrgezIzQDsgST8U0Moxwpi5FPFt1ewXrGSzbTwTD_gCIQCnGXFsjAENfC06mKNn7cqEIY5LW5Udyk_8GCT2ug2wQw%3D%3D/lsparams/hls_chunk_host,mm,mn,ms,mv,mvi,pl/lsig/AHylml4wRgIhAI1QRJCLwrec4igs-leLO5JxyI4TSS2KYyvScKooba8sAiEA6tmsXBCeGrnTWSYagWR51Z2O-py1GLBGnzQH5x6kWFU%3D/playlist/index.m3u8?fbclid=IwAR1sz3la4Can4Sc7912IM4_pnKyLnVn5L4zi0MG2l-3luLB188fyj4iKfIo" type="application/x-mpegURL" />
                </video>
            </div>
        );
    }
}
export default withAuthenticator(Livestream);
