/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { forwardRef } from 'react';
import clsx from 'clsx';

export const MenuContent = forwardRef<
  HTMLDivElement,
  { className?: string; children: React.ReactNode }
>((props, ref) => {
  const { className, children, ...otherProps } = props;
  return (
    <div ref={ref} className={clsx('menu', className)} {...otherProps}>
      {children}
    </div>
  );
});

MenuContent.displayName = 'MenuContentItem';

export const MenuContentItem: React.FC<{
  className?: string;
  onClick?: () => void;
}> = (props) => {
  const { className, onClick, children, ...otherProps } = props;
  return (
    <div
      className={clsx('menu__item', className)}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export const MenuContentItemIcon: React.FC<{
  className?: string;
}> = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <div className={clsx('menu__item__icon', className)} {...otherProps}>
      {children}
    </div>
  );
};

export const MenuContentItemBlankIcon: React.FC<{
  className?: string;
}> = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div className={clsx('menu__item__icon', className)} {...otherProps} />
  );
};

export const MenuContentItemLabel: React.FC<{
  className?: string;
}> = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <div className={clsx('menu__item__label', className)} {...otherProps}>
      {children}
    </div>
  );
};
