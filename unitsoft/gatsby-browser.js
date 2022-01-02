import "carbon-components/scss/globals/scss/styles.scss";
import { gapi, loadClientAuth2 } from 'gapi-script';

loadClientAuth2(gapi, process.env.GOOGLE_CLIENT_ID, "profile");
