// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hRsY5NbPeCQT1m4ubZULqa
// Component: jvp3Zw0Hsia
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
import Select__Overlay from "../../Select__Overlay"; // plasmic-import: IkGGlxh-EgI/component
import Select__Option from "../../Select__Option"; // plasmic-import: pdoSEuWNFhp/component

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_aditi_rajagopal_personal_website_2022.module.css"; // plasmic-import: hRsY5NbPeCQT1m4ubZULqa/projectcss
import * as sty from "./PlasmicSelect.module.css"; // plasmic-import: jvp3Zw0Hsia/css

import ChevronDownsvgIcon from "./icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: mpelM3JMWds/icon
import ChevronUpsvgIcon from "./icons/PlasmicIcon__ChevronUpsvg"; // plasmic-import: FXvm33IeKIg/icon

export type PlasmicSelect__VariantMembers = {
  showPlaceholder: "showPlaceholder";
  isOpen: "isOpen";
  isDisabled: "isDisabled";
  color:
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear";
};

export type PlasmicSelect__VariantsArgs = {
  showPlaceholder?: SingleBooleanChoiceArg<"showPlaceholder">;
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  color?: SingleChoiceArg<
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear"
  >;
};

type VariantPropType = keyof PlasmicSelect__VariantsArgs;
export const PlasmicSelect__VariantProps = new Array<VariantPropType>(
  "showPlaceholder",
  "isOpen",
  "isDisabled",
  "color"
);

export type PlasmicSelect__ArgsType = {
  selectedContent?: React.ReactNode;
  placeholder?: React.ReactNode;
  children?: React.ReactNode;
  value?: string;
  name?: string;
};

type ArgPropType = keyof PlasmicSelect__ArgsType;
export const PlasmicSelect__ArgProps = new Array<ArgPropType>(
  "selectedContent",
  "placeholder",
  "children",
  "value",
  "name"
);

export type PlasmicSelect__OverridesType = {
  root?: p.Flex<"div">;
  trigger?: p.Flex<"button">;
  contentContainer?: p.Flex<"div">;
  dropdownIcon?: p.Flex<"svg">;
  overlay?: p.Flex<typeof Select__Overlay>;
  optionsContainer?: p.Flex<"div">;
};

export interface DefaultSelectProps extends pp.BaseSelectProps {
  color?: SingleChoiceArg<
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear"
  >;
}

const PlasmicSelectContext = React.createContext<
  | undefined
  | { variants: PlasmicSelect__VariantsArgs; args: PlasmicSelect__ArgsType }
>(undefined);

function PlasmicSelect__RenderFunc(props: {
  variants: PlasmicSelect__VariantsArgs;
  args: PlasmicSelect__ArgsType;
  overrides: PlasmicSelect__OverridesType;
  dataFetches?: PlasmicSelect__Fetches;
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
    <PlasmicSelectContext.Provider value={{ variants, args }}>
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
          [sty.root_____focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.root__color_clear]: hasVariant(variants, "color", "clear"),
          [sty.root__color_softBlue]: hasVariant(variants, "color", "softBlue"),
          [sty.root__color_softCyan]: hasVariant(variants, "color", "softCyan"),
          [sty.root__color_softGreen]: hasVariant(
            variants,
            "color",
            "softGreen"
          ),
          [sty.root__color_softOrange]: hasVariant(
            variants,
            "color",
            "softOrange"
          ),
          [sty.root__color_softPink]: hasVariant(variants, "color", "softPink"),
          [sty.root__color_softPurple]: hasVariant(
            variants,
            "color",
            "softPurple"
          ),
          [sty.root__color_softRed]: hasVariant(variants, "color", "softRed"),
          [sty.root__color_softYellow]: hasVariant(
            variants,
            "color",
            "softYellow"
          ),
          [sty.root__isOpen]: hasVariant(variants, "isOpen", "isOpen")
        })}
        data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
      >
        <button
          data-plasmic-name={"trigger"}
          data-plasmic-override={overrides.trigger}
          className={classNames(projectcss.button, sty.trigger, {
            [sty.trigger_____focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.trigger__color_clear]: hasVariant(variants, "color", "clear"),
            [sty.trigger__color_softBlue]: hasVariant(
              variants,
              "color",
              "softBlue"
            ),
            [sty.trigger__color_softCyan]: hasVariant(
              variants,
              "color",
              "softCyan"
            ),
            [sty.trigger__color_softGray]: hasVariant(
              variants,
              "color",
              "softGray"
            ),
            [sty.trigger__color_softGreen]: hasVariant(
              variants,
              "color",
              "softGreen"
            ),
            [sty.trigger__color_softOrange]: hasVariant(
              variants,
              "color",
              "softOrange"
            ),
            [sty.trigger__color_softPink]: hasVariant(
              variants,
              "color",
              "softPink"
            ),
            [sty.trigger__color_softPurple]: hasVariant(
              variants,
              "color",
              "softPurple"
            ),
            [sty.trigger__color_softRed]: hasVariant(
              variants,
              "color",
              "softRed"
            ),
            [sty.trigger__color_softYellow]: hasVariant(
              variants,
              "color",
              "softYellow"
            ),
            [sty.trigger__isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),
            [sty.trigger__isOpen]: hasVariant(variants, "isOpen", "isOpen")
          })}
          disabled={
            hasVariant(variants, "isDisabled", "isDisabled") ? true : undefined
          }
        >
          <div
            data-plasmic-name={"contentContainer"}
            data-plasmic-override={overrides.contentContainer}
            className={classNames(projectcss.all, sty.contentContainer, {
              [sty.contentContainer__color_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),
              [sty.contentContainer__isDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.contentContainer__showPlaceholder]: hasVariant(
                variants,
                "showPlaceholder",
                "showPlaceholder"
              )
            })}
          >
            {(
              hasVariant(variants, "showPlaceholder", "showPlaceholder")
                ? false
                : true
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Selected",
                  value: args.selectedContent,
                  className: classNames(sty.slotTargetSelectedContent, {
                    [sty.slotTargetSelectedContent__color_softBlue]: hasVariant(
                      variants,
                      "color",
                      "softBlue"
                    ),
                    [sty.slotTargetSelectedContent__color_softCyan]: hasVariant(
                      variants,
                      "color",
                      "softCyan"
                    ),
                    [sty.slotTargetSelectedContent__color_softGreen]:
                      hasVariant(variants, "color", "softGreen"),
                    [sty.slotTargetSelectedContent__color_softOrange]:
                      hasVariant(variants, "color", "softOrange"),
                    [sty.slotTargetSelectedContent__color_softPink]: hasVariant(
                      variants,
                      "color",
                      "softPink"
                    ),
                    [sty.slotTargetSelectedContent__color_softPurple]:
                      hasVariant(variants, "color", "softPurple"),
                    [sty.slotTargetSelectedContent__color_softRed]: hasVariant(
                      variants,
                      "color",
                      "softRed"
                    ),
                    [sty.slotTargetSelectedContent__color_softYellow]:
                      hasVariant(variants, "color", "softYellow"),
                    [sty.slotTargetSelectedContent__isDisabled]: hasVariant(
                      variants,
                      "isDisabled",
                      "isDisabled"
                    ),
                    [sty.slotTargetSelectedContent__isOpen]: hasVariant(
                      variants,
                      "isOpen",
                      "isOpen"
                    ),
                    [sty.slotTargetSelectedContent__showPlaceholder]:
                      hasVariant(variants, "showPlaceholder", "showPlaceholder")
                  })
                })
              : null}
            {(
              hasVariant(variants, "showPlaceholder", "showPlaceholder")
                ? true
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Select…",
                  value: args.placeholder,
                  className: classNames(sty.slotTargetPlaceholder, {
                    [sty.slotTargetPlaceholder__color_softBlue]: hasVariant(
                      variants,
                      "color",
                      "softBlue"
                    ),
                    [sty.slotTargetPlaceholder__color_softPurple_showPlaceholder]:
                      hasVariant(variants, "color", "softPurple") &&
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ),
                    [sty.slotTargetPlaceholder__showPlaceholder]: hasVariant(
                      variants,
                      "showPlaceholder",
                      "showPlaceholder"
                    ),
                    [sty.slotTargetPlaceholder__showPlaceholder_color_softBlue]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softBlue"),
                    [sty.slotTargetPlaceholder__showPlaceholder_color_softCyan]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softCyan"),
                    [sty.slotTargetPlaceholder__showPlaceholder_color_softGreen]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softGreen"),
                    [sty.slotTargetPlaceholder__showPlaceholder_color_softOrange]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softOrange"),
                    [sty.slotTargetPlaceholder__showPlaceholder_color_softPink]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softPink"),
                    [sty.slotTargetPlaceholder__showPlaceholder_color_softRed]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softRed"),
                    [sty.slotTargetPlaceholder__showPlaceholder_color_softYellow]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softYellow")
                  })
                })
              : null}
          </div>

          <p.PlasmicIcon
            data-plasmic-name={"dropdownIcon"}
            data-plasmic-override={overrides.dropdownIcon}
            PlasmicIconType={
              hasVariant(variants, "isOpen", "isOpen")
                ? ChevronUpsvgIcon
                : ChevronDownsvgIcon
            }
            className={classNames(projectcss.all, sty.dropdownIcon, {
              [sty.dropdownIcon_____focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.dropdownIcon__color_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),
              [sty.dropdownIcon__color_softCyan]: hasVariant(
                variants,
                "color",
                "softCyan"
              ),
              [sty.dropdownIcon__color_softGray]: hasVariant(
                variants,
                "color",
                "softGray"
              ),
              [sty.dropdownIcon__color_softGreen]: hasVariant(
                variants,
                "color",
                "softGreen"
              ),
              [sty.dropdownIcon__color_softOrange]: hasVariant(
                variants,
                "color",
                "softOrange"
              ),
              [sty.dropdownIcon__color_softPink]: hasVariant(
                variants,
                "color",
                "softPink"
              ),
              [sty.dropdownIcon__color_softPurple]: hasVariant(
                variants,
                "color",
                "softPurple"
              ),
              [sty.dropdownIcon__color_softRed]: hasVariant(
                variants,
                "color",
                "softRed"
              ),
              [sty.dropdownIcon__color_softYellow]: hasVariant(
                variants,
                "color",
                "softYellow"
              ),
              [sty.dropdownIcon__isDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.dropdownIcon__isOpen]: hasVariant(
                variants,
                "isOpen",
                "isOpen"
              )
            })}
            role={"img"}
          />
        </button>

        {(hasVariant(variants, "isOpen", "isOpen") ? true : false) ? (
          <Select__Overlay
            data-plasmic-name={"overlay"}
            data-plasmic-override={overrides.overlay}
            className={classNames("__wab_instance", sty.overlay, {
              [sty.overlay__isOpen]: hasVariant(variants, "isOpen", "isOpen")
            })}
            relativePlacement={"bottom" as const}
          >
            <div
              data-plasmic-name={"optionsContainer"}
              data-plasmic-override={overrides.optionsContainer}
              className={classNames(projectcss.all, sty.optionsContainer, {
                [sty.optionsContainer__isOpen]: hasVariant(
                  variants,
                  "isOpen",
                  "isOpen"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__kBirt
                      )}
                      value={"value1" as const}
                    >
                      {"Option 1"}
                    </Select__Option>

                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__xJrwG
                      )}
                      value={"value2" as const}
                    >
                      {"Option 2"}
                    </Select__Option>
                  </React.Fragment>
                ),
                value: args.children
              })}
            </div>
          </Select__Overlay>
        ) : null}
      </div>
    </PlasmicSelectContext.Provider>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseSelectProps>(
  props: P,
  ref: pp.SelectRef
) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: (
        <React.Fragment>
          <Select__Option
            className={classNames("__wab_instance", sty.option__kBirt)}
            value={"value1" as const}
          >
            {"Option 1"}
          </Select__Option>

          <Select__Option
            className={classNames("__wab_instance", sty.option__xJrwG)}
            value={"value2" as const}
          >
            {"Option 2"}
          </Select__Option>
        </React.Fragment>
      )
    };
  }

  return pp.useSelect(
    PlasmicSelect,
    props,
    {
      isOpenVariant: { group: "isOpen", variant: "isOpen" },
      placeholderVariant: {
        group: "showPlaceholder",
        variant: "showPlaceholder"
      },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      triggerContentSlot: "selectedContent",
      optionsSlot: "children",
      placeholderSlot: "placeholder",
      root: "root",
      trigger: "trigger",
      overlay: "overlay",
      optionsContainer: "optionsContainer"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "trigger",
    "contentContainer",
    "dropdownIcon",
    "overlay",
    "optionsContainer"
  ],
  trigger: ["trigger", "contentContainer", "dropdownIcon"],
  contentContainer: ["contentContainer"],
  dropdownIcon: ["dropdownIcon"],
  overlay: ["overlay", "optionsContainer"],
  optionsContainer: ["optionsContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  trigger: "button";
  contentContainer: "div";
  dropdownIcon: "svg";
  overlay: typeof Select__Overlay;
  optionsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelect__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelect__VariantsArgs;
    args?: PlasmicSelect__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSelect__Fetches;
  } & Omit<PlasmicSelect__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSelect__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSelect__ArgProps,
      internalVariantPropNames: PlasmicSelect__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSelect__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect";
  } else {
    func.displayName = `PlasmicSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect = Object.assign(
  // Top-level PlasmicSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    trigger: makeNodeComponent("trigger"),
    contentContainer: makeNodeComponent("contentContainer"),
    dropdownIcon: makeNodeComponent("dropdownIcon"),
    overlay: makeNodeComponent("overlay"),
    optionsContainer: makeNodeComponent("optionsContainer"),

    // Metadata about props expected for PlasmicSelect
    internalVariantProps: PlasmicSelect__VariantProps,
    internalArgProps: PlasmicSelect__ArgProps,

    // Context for sub components
    Context: PlasmicSelectContext,

    useBehavior
  }
);

export default PlasmicSelect;
/* prettier-ignore-end */
