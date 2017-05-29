import * as React from "react";
import { connect } from "react-redux";
import { RootState, Action } from "../../redux";
import { fetchFiles, FilePayload } from "../../redux/modules/files/files";

import SendFileForm from "../../components/Forms/SendFileForm";

const s = require("./SendFile.scss");

export interface Props {
    files: any;
    dispatch: any;
}

class SendFiles extends React.Component<Props, {}> {
    componentWillMount() {
        this.props.dispatch(fetchFiles());
    }

    render() {
        return (
			<div className="container">
	        	<div className={s.sendFileContent}>
					<SendFileForm/>
				</div>
			</div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        files: state.files.items
    };
};

export default connect(mapStateToProps)(SendFiles);
