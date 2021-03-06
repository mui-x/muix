import { filterRulesetNames, RulesetPatchGetter } from 'reactxx-sheeter'

//export const whenFlagRulesetFilter: RulesetPatchGetter = ({ addInSheet, usedRulesetNames }) => filterRulesetNames(addInSheet).filter(key => usedRulesetNames[key]).map(key => addInSheet[key])
export const whenFlagRulesetFilter: RulesetPatchGetter = ({ addInSheet, usedRulesetNames }) => filterRulesetNames(addInSheet).filter(key => usedRulesetNames && usedRulesetNames[key]).map(key => addInSheet[key])


