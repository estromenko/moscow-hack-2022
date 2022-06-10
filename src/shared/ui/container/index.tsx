import React, { FC } from 'react';

import './style.scss';

const Container: FC = ({ children }) => <div className="container">{children}</div>;

Container.displayName = 'Container';

export default Container;
