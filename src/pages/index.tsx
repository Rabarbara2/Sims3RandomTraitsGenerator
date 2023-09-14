import { Inter } from "next/font/google";

import { Controller, useForm } from "react-hook-form";
import { Dropdown } from "@/components/Dropdown";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import ExcitableTrait from "@/assets/images/traits/excitable";
import ComboBox from "@/components/Dropdown2";
import { useState } from "react";
import Image from "next/image";
import { BabyTraits } from "@/traits/traits";
import FormBaby from "@/components/forms/FormBaby";
import FormChild from "@/components/forms/FormChild";
import FormTeen from "@/components/forms/FormTeen";
import FormAdult from "@/components/forms/FormAdult";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { watch, control } = useForm();

  const checkIfImage = () => {
    if (watch("select") === 10) {
      alert("image!!");
    }
  };
  const wybrane = [
    BabyTraits.artistic,
    BabyTraits.brave,
    BabyTraits.couch_potato,
  ];

  const alercik = () => {
    wybrane.map((trait) => {
      console.log(BabyTraits.artistic);
      BabyTraits[trait.name as keyof typeof BabyTraits].weight *= 1.5;
      console.log(BabyTraits.artistic);

      if (trait.decreases.length > 0) {
        trait.decreases.map((traitToDecrease) => {
          BabyTraits[traitToDecrease as keyof typeof BabyTraits].weight *= 0.5;
        });
      }
    });
    console.log(BabyTraits);
  };

  const test = { kotek: "fajny", lat: "malo" };

  checkIfImage();

  return (
    <div>
      kotek
      <div className="flex w-full justify-center items-center flex-col gap-8">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className=""
        />
        <h1>Who do we generate boss?</h1>
        <Controller
          control={control}
          defaultValue=""
          name="age"
          render={({ field }) => (
            <Dropdown className="w-80 h-14 drop-shadow" {...field} label="">
              <MenuItem value="baby" className="h-14 justify-center">
                baby
              </MenuItem>
              <MenuItem value="child" className="h-14 justify-center">
                child
              </MenuItem>
              <MenuItem value="teen" className="h-14 justify-center">
                teen
              </MenuItem>
              <MenuItem value="adult" className="h-14 justify-center">
                adult
              </MenuItem>
            </Dropdown>
          )}
        />
        pick parents traits &lt;3
        <div className="grid grid-cols-1 gap-5 justify-items-center sm:grid-cols-2 max-w-3xl">
          <Controller
            control={control}
            defaultValue=""
            name="parent1_1"
            render={({ field }) => (
              <Dropdown
                {...field}
                label="cecha 1"
                className="w-80 h-14 drop-shadow"
              >
                <MenuItem value="excitable" className="h-14">
                  <ExcitableTrait className="scale-50 inline-block" />
                  excitable
                </MenuItem>
                <MenuItem value="fajne" className="h-14">
                  <ExcitableTrait className="scale-50 inline-block" />
                  fajne
                </MenuItem>
                <MenuItem value="niefajne" className="h-10">
                  <ExcitableTrait className="scale-50 inline-block" />
                  niefajne
                </MenuItem>
              </Dropdown>
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="parent2_1"
            render={({ field }) => (
              <Dropdown {...field} label="" className="w-80 h-14 drop-shadow">
                {["asdf", "fajne", "niefajne"].map((element) => (
                  <MenuItem key={element} value={element}>
                    <ExcitableTrait className="scale-50 inline-block" />
                    {element}
                  </MenuItem>
                ))}
              </Dropdown>
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="parent1_2"
            render={({ field }) => (
              <Dropdown
                {...field}
                label="cecha 1"
                className="w-80 h-14 drop-shadow"
              >
                <MenuItem value="excitable" className="h-14">
                  <ExcitableTrait className="scale-50 inline-block" />
                  excitable
                </MenuItem>
                <MenuItem value="fajne" className="h-14">
                  <ExcitableTrait className="scale-50 inline-block" />
                  fajne
                </MenuItem>
                <MenuItem value="niefajne" className="h-10">
                  <ExcitableTrait className="scale-50 inline-block" />
                  niefajne
                </MenuItem>
              </Dropdown>
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="parent2_2"
            render={({ field }) => (
              <Dropdown {...field} label="" className="w-80 h-14 drop-shadow">
                {["asdf", "fajne", "niefajne"].map((element) => (
                  <MenuItem key={element} value={element}>
                    <ExcitableTrait className="scale-50 inline-block" />
                    {element}
                  </MenuItem>
                ))}
              </Dropdown>
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="parent1_3"
            render={({ field }) => (
              <Dropdown
                {...field}
                label="cecha 1"
                className="w-80 h-14 drop-shadow"
              >
                <MenuItem value="excitable" className="h-14">
                  <ExcitableTrait className="scale-50 inline-block" />
                  excitable
                </MenuItem>
                <MenuItem value="fajne" className="h-14">
                  <ExcitableTrait className="scale-50 inline-block" />
                  fajne
                </MenuItem>
                <MenuItem value="niefajne" className="h-10">
                  <ExcitableTrait className="scale-50 inline-block" />
                  niefajne
                </MenuItem>
              </Dropdown>
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="parent2_3"
            render={({ field }) => (
              <Dropdown {...field} label="" className="w-80 h-14 drop-shadow">
                {["asdf", "fajne", "niefajne"].map((element) => (
                  <MenuItem key={element} value={element}>
                    <ExcitableTrait className="scale-50 inline-block" />
                    {element}
                  </MenuItem>
                ))}
              </Dropdown>
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="parent1_4"
            render={({ field }) => (
              <Dropdown
                {...field}
                label="cecha 1"
                className="w-80 h-14 drop-shadow"
              >
                <MenuItem value="excitable" className="h-14">
                  <ExcitableTrait className="scale-50 inline-block" />
                  excitable
                </MenuItem>
                <MenuItem value="fajne" className="h-14">
                  <ExcitableTrait className="scale-50 inline-block" />
                  fajne
                </MenuItem>
                <MenuItem value="niefajne" className="h-10">
                  <ExcitableTrait className="scale-50 inline-block" />
                  niefajne
                </MenuItem>
              </Dropdown>
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="parent2_4"
            render={({ field }) => (
              <Dropdown {...field} label="" className="w-80 h-14 drop-shadow">
                {["asdf", "fajne", "niefajne", "upo"].map((element) => (
                  <MenuItem key={element} value={element}>
                    <ExcitableTrait className="scale-50 inline-block" />
                    {element}
                  </MenuItem>
                ))}
              </Dropdown>
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="parent1_5"
            render={({ field }) => (
              <Dropdown
                {...field}
                label="cecha 1"
                className="w-80 h-14 drop-shadow"
              >
                <MenuItem value="excitable" className="h-14">
                  <ExcitableTrait className="scale-50 inline-block" />
                  excitable
                </MenuItem>
                <MenuItem value="fajne" className="h-14">
                  <ExcitableTrait className="scale-50 inline-block" />
                  fajne
                </MenuItem>
                <MenuItem value="niefajne" className="h-10">
                  <ExcitableTrait className="scale-50 inline-block" />
                  niefajne
                </MenuItem>
              </Dropdown>
            )}
          />
          <Controller
            control={control}
            defaultValue=""
            name="parent2_5"
            render={({ field }) => (
              <Dropdown {...field} label="" className="w-80 h-14 drop-shadow">
                {["asdf", "fajne", "niefajne"].map((element) => (
                  <MenuItem key={element} value={element}>
                    <ExcitableTrait className="scale-50 inline-block" />
                    {element}
                  </MenuItem>
                ))}
              </Dropdown>
            )}
          />
        </div>
        {watch("age") === "baby" && <FormBaby />}
        {watch("age") === "child" && <FormChild />}
        {watch("age") === "teen" && <FormTeen />}
        {watch("age") === "adult" && <FormAdult />}
      </div>
      <Button onClick={alercik}>GENERATE</Button>
      <div className="h-32" />
    </div>
  );
}
