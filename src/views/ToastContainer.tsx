import React from 'react';
import {connect} from 'react-redux';

import {IToast} from '../interfaces/IToast';
import {JodelThunkDispatch} from '../interfaces/JodelThunkAction';
import {hideToast} from '../redux/actions/toasts.actions';
import {IJodelAppStore} from '../redux/reducers';
import {toastsSelector} from '../redux/selectors/app';
import {Toast} from './Toast';
import './ToastContainer.scss';

interface IToastContainerComponentProps {
    toasts: ReadonlyArray<IToast>;
    onToastClick: (toastId: number) => void;
}

const ToastContainerComponent = ({toasts, onToastClick}: IToastContainerComponentProps) => {
    return <div className="toast-container">
        {toasts.map(toast =>
            <Toast
                key={toast.id}
                toast={toast}
                onClick={onToastClick}
            />)
        }
    </div>;
};

const mapStateToProps = (state: IJodelAppStore) => {
    return {
        toasts: toastsSelector(state),
    };
};

const mapDispatchToProps = (dispatch: JodelThunkDispatch) => {
    return {
        onToastClick: (toastId: number) => {
            dispatch(hideToast(toastId));
        },
    };
};

export const ToastContainer = connect(mapStateToProps, mapDispatchToProps)(ToastContainerComponent);
