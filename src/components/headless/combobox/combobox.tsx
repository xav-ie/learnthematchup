import {
  Combobox,
  ComboboxControl,
  ComboboxIcon,
  ComboboxInput,
  ComboboxLabel,
  ComboboxListbox,
  ComboboxOption,
  ComboboxPopover,
  ComboboxTrigger,
} from '@qwik-ui/headless';
import type { ResolvedOption } from '@qwik-ui/headless';
import { component$, useSignal } from '@builder.io/qwik';
import styles from "./combobox.module.css";

export default component$(() => {
  const selectedOptionIndexSig = useSignal<number>(-1);

  const objectExample = [
    // { testValue: 'alice', testLabel: 'Alice', disabled: true },
    // { testValue: 'joana', testLabel: 'Joana', disabled: true },
    { testValue: 'malcolm', testLabel: 'Malcolm', disabled: false },
    // { testValue: 'zack', testLabel: 'Zack', disabled: true },
    { testValue: 'brian', testLabel: 'Brian', disabled: false },
    { testValue: 'ryan', testLabel: 'Ryan', disabled: false },
    { testValue: 'joe', testLabel: 'Joe', disabled: false },
    { testValue: 'randy', testLabel: 'Randy', disabled: false },
    // { testValue: 'david', testLabel: 'David', disabled: true },
    { testValue: 'joseph', testLabel: 'Joseph', disabled: false },
  ];

  type MyData = {
    testValue: string;
    testLabel: string;
    disabled: boolean;
  };

  return (
    <Combobox
      options={objectExample}
      optionValueKey="testValue"
      optionLabelKey="testLabel"
      optionDisabledKey="disabled"
      bind: selectedIndex={selectedOptionIndexSig}
      class="max-w-[300px]"
    >
      <ComboboxLabel class="font-semibold">Personal Trainers ⚡</ComboboxLabel>
      <ComboboxControl class="rounded-base relative flex items-center">
        <ComboboxInput
          placeholder="Jim"
          class="px-2 h-6 bg-background placeholder:text-muted-foreground text-black w-full rounded-base w-44 px-2 pr-6"
        />
        <ComboboxTrigger class="group absolute right-0 h-6 w-6 p-0 rounded-none">
          <ComboboxIcon class="stroke-red-500 transition-transform duration-200 group-aria-expanded:-rotate-180" />
        </ComboboxTrigger>
      </ComboboxControl>
      <ComboboxPopover class="rounded-sm bg-blue-200 w-[300px]" gutter={8}>
        <ComboboxListbox
          class="rounded-base outline outline-2 outline-red-500 w-full dark:bg-background-900 dark:text-foreground-200"
          optionRenderer$={(option: ResolvedOption, index: number) => {
            const myData = option.option as MyData;
            return (
              <ComboboxOption
                key={option.key}
                resolved={option}
                index={index}
                class="h-6 hover:bg-backgroundAccent-400 hover:text-foregroundAccent-500 aria-disabled:text-red-500 hover:cursor-pointer aria-selected:border-border aria-selected:bg-accent rounded-base group flex justify-between border border-transparent px-2 aria-disabled:font-light aria-selected:cursor-pointer"
              >
                <span>{myData.testLabel}</span>
                {selectedOptionIndexSig.value === index && <span>Selected</span>}
              </ComboboxOption>
            );
          }}
        />
      </ComboboxPopover>
    </Combobox>
  );
});

