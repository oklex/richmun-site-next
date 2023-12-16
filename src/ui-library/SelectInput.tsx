import React, { ReactElement, Fragment, useState, useEffect } from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

import { Label } from './Header';
import { Text } from './Text';
import { Div } from './Generics';
import { TextStyle } from './TextStyle';

type SelectOption = {
  label: string;
  value: string;
  secondaryText?: string;
};
type SelectProps = {
  name: string;
  label?: string;
  options: SelectOption[];
  onChange: (a: SelectOption) => void;
  defaultValue?: string;
  value?: string;
  inline?: boolean;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const SelectInput = ({
  name,
  label,
  options,
  onChange: onChangeCallback,
  defaultValue,
  value,
  inline,
}: SelectProps): ReactElement => {
  const [selected, setSelected] = useState(
    defaultValue
      ? options.find((option) => option.value === defaultValue) ?? options[0]
      : options[0],
  );

  useEffect(() => {
    if (value !== selected.value)
      setSelected(options.find((option) => option.value === value) ?? options[0]);
  }, [value]);

  const onChange = (select: SelectOption): void => {
    console.log('onchange', select);
    setSelected(select);
    onChangeCallback(select);
  };

  return (
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <Div flex={inline} alignItems='center' gap='12px'>
          <Label>{label ?? name}</Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">
                  <Text>{selected.label}</Text>
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-neutral-200 text-black' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                      )
                    }
                    value={option}
                  >
                    {({ active }) => {
                      const isSelected = option.value === selected.value;
                      return (
                        <>
                          <div className="flex items-center">
                            <span className="ml-3 block truncate">
                              <Label>
                                <TextStyle color={isSelected ? 'blue' : undefined}>
                                  {option.label}
                                </TextStyle>
                                <TextStyle
                                  color="med-contrast"
                                  padding="0px 0px 0px 15px"
                                  forceSingleLine
                                >
                                  {option.secondaryText ?? ''}
                                </TextStyle>
                              </Label>
                            </span>
                          </div>

                          {isSelected ? (
                            <span
                              className={classNames(
                                active ? 'text-grey' : 'text-teal-700',
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      );
                    }}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Div>
      )}
    </Listbox>
  );
};
