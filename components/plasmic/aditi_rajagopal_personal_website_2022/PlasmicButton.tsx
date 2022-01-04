// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hRsY5NbPeCQT1m4ubZULqa
// Component: KtXDTZcD4n6
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
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

import * as projectcss from "./plasmic_aditi_rajagopal_personal_website_2022.module.css"; // plasmic-import: hRsY5NbPeCQT1m4ubZULqa/projectcss
import * as sty from "./PlasmicButton.module.css"; // plasmic-import: KtXDTZcD4n6/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: RKYv7Ypni3q/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: UFOK1ZBUwLm/icon

export type PlasmicButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
  shape: "rounded" | "round" | "sharp";
  size: "compact" | "minimal";
  color:
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link";
};

export type PlasmicButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal">;
  color?: SingleChoiceArg<
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
  >;
};

type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "shape",
  "size",
  "color"
);

export type PlasmicButton__ArgsType = {
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string | PageHref;
};

type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "children",
  "startIcon",
  "endIcon",
  "link"
);

export type PlasmicButton__OverridesType = {
  root?: p.Flex<"button">;
  startIconContainer?: p.Flex<"div">;
  contentContainer?: p.Flex<"div">;
  endIconContainer?: p.Flex<"div">;
};

export interface DefaultButtonProps extends pp.BaseButtonProps {
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal">;
  color?: SingleChoiceArg<
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
  >;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
  dataFetches?: PlasmicButton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.button,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root_____focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.root__color_blue]: hasVariant(variants, "color", "blue"),
          [sty.root__color_clear]: hasVariant(variants, "color", "clear"),
          [sty.root__color_green]: hasVariant(variants, "color", "green"),
          [sty.root__color_link]: hasVariant(variants, "color", "link"),
          [sty.root__color_link_size_minimal]:
            hasVariant(variants, "color", "link") &&
            hasVariant(variants, "size", "minimal"),
          [sty.root__color_red]: hasVariant(variants, "color", "red"),
          [sty.root__color_sand]: hasVariant(variants, "color", "sand"),
          [sty.root__color_softBlue]: hasVariant(variants, "color", "softBlue"),
          [sty.root__color_softGreen]: hasVariant(
            variants,
            "color",
            "softGreen"
          ),
          [sty.root__color_softRed]: hasVariant(variants, "color", "softRed"),
          [sty.root__color_softSand]: hasVariant(variants, "color", "softSand"),
          [sty.root__color_softYellow]: hasVariant(
            variants,
            "color",
            "softYellow"
          ),
          [sty.root__color_white]: hasVariant(variants, "color", "white"),
          [sty.root__color_yellow]: hasVariant(variants, "color", "yellow"),
          [sty.root__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.root__shape_round]: hasVariant(variants, "shape", "round"),
          [sty.root__shape_round_size_compact]:
            hasVariant(variants, "shape", "round") &&
            hasVariant(variants, "size", "compact"),
          [sty.root__shape_rounded]: hasVariant(variants, "shape", "rounded"),
          [sty.root__shape_rounded_showStartIcon]:
            hasVariant(variants, "shape", "rounded") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          [sty.root__shape_sharp]: hasVariant(variants, "shape", "sharp"),
          [sty.root__showEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.root__showEndIcon_shape_rounded]:
            hasVariant(variants, "showEndIcon", "showEndIcon") &&
            hasVariant(variants, "shape", "rounded"),
          [sty.root__showStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.root__size_compact]: hasVariant(variants, "size", "compact"),
          [sty.root__size_compact_shape_rounded]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "shape", "rounded"),
          [sty.root__size_compact_showEndIcon]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          [sty.root__size_compact_showStartIcon]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          [sty.root__size_compact_showStartIcon_showEndIcon]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          [sty.root__size_minimal]: hasVariant(variants, "size", "minimal")
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(
        hasVariant(variants, "showStartIcon", "showStartIcon") ? true : false
      ) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainer__color_blue]: hasVariant(
              variants,
              "color",
              "blue"
            ),
            [sty.startIconContainer__shape_rounded_showStartIcon]:
              hasVariant(variants, "shape", "rounded") &&
              hasVariant(variants, "showStartIcon", "showStartIcon"),
            [sty.startIconContainer__showStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__aJyT)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIcon__color_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),
              [sty.slotTargetStartIcon__color_clear]: hasVariant(
                variants,
                "color",
                "clear"
              ),
              [sty.slotTargetStartIcon__color_link]: hasVariant(
                variants,
                "color",
                "link"
              ),
              [sty.slotTargetStartIcon__color_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),
              [sty.slotTargetStartIcon__color_softGreen]: hasVariant(
                variants,
                "color",
                "softGreen"
              ),
              [sty.slotTargetStartIcon__color_softRed]: hasVariant(
                variants,
                "color",
                "softRed"
              ),
              [sty.slotTargetStartIcon__color_softSand]: hasVariant(
                variants,
                "color",
                "softSand"
              ),
              [sty.slotTargetStartIcon__color_softYellow]: hasVariant(
                variants,
                "color",
                "softYellow"
              ),
              [sty.slotTargetStartIcon__color_white]: hasVariant(
                variants,
                "color",
                "white"
              ),
              [sty.slotTargetStartIcon__color_yellow]: hasVariant(
                variants,
                "color",
                "yellow"
              ),
              [sty.slotTargetStartIcon__showStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainer_____focusVisibleWithin]:
            triggers.focusVisibleWithin_root,
          [sty.contentContainer__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.contentContainer__shape_rounded]: hasVariant(
            variants,
            "shape",
            "rounded"
          ),
          [sty.contentContainer__showEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Button",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren_____focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.slotTargetChildren__color_blue]: hasVariant(
              variants,
              "color",
              "blue"
            ),
            [sty.slotTargetChildren__color_clear]: hasVariant(
              variants,
              "color",
              "clear"
            ),
            [sty.slotTargetChildren__color_green]: hasVariant(
              variants,
              "color",
              "green"
            ),
            [sty.slotTargetChildren__color_link]: hasVariant(
              variants,
              "color",
              "link"
            ),
            [sty.slotTargetChildren__color_link_size_minimal]:
              hasVariant(variants, "color", "link") &&
              hasVariant(variants, "size", "minimal"),
            [sty.slotTargetChildren__color_red]: hasVariant(
              variants,
              "color",
              "red"
            ),
            [sty.slotTargetChildren__color_sand]: hasVariant(
              variants,
              "color",
              "sand"
            ),
            [sty.slotTargetChildren__color_softBlue]: hasVariant(
              variants,
              "color",
              "softBlue"
            ),
            [sty.slotTargetChildren__color_softGreen]: hasVariant(
              variants,
              "color",
              "softGreen"
            ),
            [sty.slotTargetChildren__color_softRed]: hasVariant(
              variants,
              "color",
              "softRed"
            ),
            [sty.slotTargetChildren__color_softSand]: hasVariant(
              variants,
              "color",
              "softSand"
            ),
            [sty.slotTargetChildren__color_softYellow]: hasVariant(
              variants,
              "color",
              "softYellow"
            ),
            [sty.slotTargetChildren__color_white]: hasVariant(
              variants,
              "color",
              "white"
            ),
            [sty.slotTargetChildren__color_yellow]: hasVariant(
              variants,
              "color",
              "yellow"
            ),
            [sty.slotTargetChildren__isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),
            [sty.slotTargetChildren__shape_rounded]: hasVariant(
              variants,
              "shape",
              "rounded"
            ),
            [sty.slotTargetChildren__showEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.slotTargetChildren__showStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),
            [sty.slotTargetChildren__size_minimal]: hasVariant(
              variants,
              "size",
              "minimal"
            )
          })
        })}
      </div>

      {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainer__color_white]: hasVariant(
              variants,
              "color",
              "white"
            ),
            [sty.endIconContainer__color_yellow]: hasVariant(
              variants,
              "color",
              "yellow"
            ),
            [sty.endIconContainer__showEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon4Icon
                className={classNames(projectcss.all, sty.svg__qDHd4)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIcon__color_clear]: hasVariant(
                variants,
                "color",
                "clear"
              ),
              [sty.slotTargetEndIcon__color_link]: hasVariant(
                variants,
                "color",
                "link"
              ),
              [sty.slotTargetEndIcon__color_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),
              [sty.slotTargetEndIcon__color_softGreen]: hasVariant(
                variants,
                "color",
                "softGreen"
              ),
              [sty.slotTargetEndIcon__color_softRed]: hasVariant(
                variants,
                "color",
                "softRed"
              ),
              [sty.slotTargetEndIcon__color_softSand]: hasVariant(
                variants,
                "color",
                "softSand"
              ),
              [sty.slotTargetEndIcon__color_softYellow]: hasVariant(
                variants,
                "color",
                "softYellow"
              ),
              [sty.slotTargetEndIcon__color_white]: hasVariant(
                variants,
                "color",
                "white"
              ),
              [sty.slotTargetEndIcon__color_yellow]: hasVariant(
                variants,
                "color",
                "yellow"
              ),
              [sty.slotTargetEndIcon__showEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButton>(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },

    ref
  );

  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = p.PlasmicLink;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "contentContainer", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
  startIconContainer: "div";
  contentContainer: "div";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicButton__Fetches;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButton__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,

    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */