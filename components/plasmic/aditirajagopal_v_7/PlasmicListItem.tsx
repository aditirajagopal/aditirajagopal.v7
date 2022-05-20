// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5Xs5TeWC1PCRPBorm9sVyK
// Component: eSivtCiIyYp
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_aditirajagopal_v_7.module.css"; // plasmic-import: 5Xs5TeWC1PCRPBorm9sVyK/projectcss
import sty from "./PlasmicListItem.module.css"; // plasmic-import: eSivtCiIyYp/css

export type PlasmicListItem__VariantMembers = {};

export type PlasmicListItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicListItem__VariantsArgs;
export const PlasmicListItem__VariantProps = new Array<VariantPropType>();

export type PlasmicListItem__ArgsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  date?: React.ReactNode;
};

type ArgPropType = keyof PlasmicListItem__ArgsType;
export const PlasmicListItem__ArgProps = new Array<ArgPropType>(
  "title",
  "description",
  "date"
);

export type PlasmicListItem__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultListItemProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  date?: React.ReactNode;
  className?: string;
}

function PlasmicListItem__RenderFunc(props: {
  variants: PlasmicListItem__VariantsArgs;
  args: PlasmicListItem__ArgsType;
  overrides: PlasmicListItem__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <p.Stack
      as={p.PlasmicLink}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={"/post" as const}
      platform={"nextjs"}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Blog Post Title",
        value: args.title,
        className: classNames(sty.slotTargetTitle)
      })}

      {p.renderPlasmicSlot({
        defaultContents: "January 1, 2020",
        value: args.date,
        className: classNames(sty.slotTargetDate)
      })}

      {p.renderPlasmicSlot({
        defaultContents: "Blog description goes here.",
        value: args.description,
        className: classNames(sty.slotTargetDescription)
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicListItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicListItem__VariantsArgs;
    args?: PlasmicListItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicListItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicListItem__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicListItem__ArgProps,
      internalVariantPropNames: PlasmicListItem__VariantProps
    });

    return PlasmicListItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicListItem";
  } else {
    func.displayName = `PlasmicListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicListItem = Object.assign(
  // Top-level PlasmicListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicListItem
    internalVariantProps: PlasmicListItem__VariantProps,
    internalArgProps: PlasmicListItem__ArgProps
  }
);

export default PlasmicListItem;
/* prettier-ignore-end */
