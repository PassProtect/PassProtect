import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customThemeOne: CustomThemeConfig = {
    name: 'customThemeOne',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "var(--color-surface-800)",
		"--theme-font-color-dark": "var(--color-surface-50)",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "var(--color-surface-100)",
		// =~= Theme Colors  =~=
		// primary | #417cb4 
		"--color-primary-50": "227 235 244", // #e3ebf4
		"--color-primary-100": "217 229 240", // #d9e5f0
		"--color-primary-200": "208 222 236", // #d0deec
		"--color-primary-300": "179 203 225", // #b3cbe1
		"--color-primary-400": "122 163 203", // #7aa3cb
		"--color-primary-500": "65 124 180", // #417cb4
		"--color-primary-600": "59 112 162", // #3b70a2
		"--color-primary-700": "49 93 135", // #315d87
		"--color-primary-800": "39 74 108", // #274a6c
		"--color-primary-900": "32 61 88", // #203d58
		// secondary | #69a0d3 
		"--color-secondary-50": "233 241 248", // #e9f1f8
		"--color-secondary-100": "225 236 246", // #e1ecf6
		"--color-secondary-200": "218 231 244", // #dae7f4
		"--color-secondary-300": "195 217 237", // #c3d9ed
		"--color-secondary-400": "150 189 224", // #96bde0
		"--color-secondary-500": "105 160 211", // #69a0d3
		"--color-secondary-600": "95 144 190", // #5f90be
		"--color-secondary-700": "79 120 158", // #4f789e
		"--color-secondary-800": "63 96 127", // #3f607f
		"--color-secondary-900": "51 78 103", // #334e67
		// tertiary | #a3d3ff 
		"--color-tertiary-50": "241 248 255", // #f1f8ff
		"--color-tertiary-100": "237 246 255", // #edf6ff
		"--color-tertiary-200": "232 244 255", // #e8f4ff
		"--color-tertiary-300": "218 237 255", // #daedff
		"--color-tertiary-400": "191 224 255", // #bfe0ff
		"--color-tertiary-500": "163 211 255", // #a3d3ff
		"--color-tertiary-600": "147 190 230", // #93bee6
		"--color-tertiary-700": "122 158 191", // #7a9ebf
		"--color-tertiary-800": "98 127 153", // #627f99
		"--color-tertiary-900": "80 103 125", // #50677d
		// success | #90b658 
		"--color-success-50": "238 244 230", // #eef4e6
		"--color-success-100": "233 240 222", // #e9f0de
		"--color-success-200": "227 237 213", // #e3edd5
		"--color-success-300": "211 226 188", // #d3e2bc
		"--color-success-400": "177 204 138", // #b1cc8a
		"--color-success-500": "144 182 88", // #90b658
		"--color-success-600": "130 164 79", // #82a44f
		"--color-success-700": "108 137 66", // #6c8942
		"--color-success-800": "86 109 53", // #566d35
		"--color-success-900": "71 89 43", // #47592b
		// warning | #dbbf6b 
		"--color-warning-50": "250 245 233", // #faf5e9
		"--color-warning-100": "248 242 225", // #f8f2e1
		"--color-warning-200": "246 239 218", // #f6efda
		"--color-warning-300": "241 229 196", // #f1e5c4
		"--color-warning-400": "230 210 151", // #e6d297
		"--color-warning-500": "219 191 107", // #dbbf6b
		"--color-warning-600": "197 172 96", // #c5ac60
		"--color-warning-700": "164 143 80", // #a48f50
		"--color-warning-800": "131 115 64", // #837340
		"--color-warning-900": "107 94 52", // #6b5e34
		// error | #db6666 
		"--color-error-50": "250 232 232", // #fae8e8
		"--color-error-100": "248 224 224", // #f8e0e0
		"--color-error-200": "246 217 217", // #f6d9d9
		"--color-error-300": "241 194 194", // #f1c2c2
		"--color-error-400": "230 148 148", // #e69494
		"--color-error-500": "219 102 102", // #db6666
		"--color-error-600": "197 92 92", // #c55c5c
		"--color-error-700": "164 77 77", // #a44d4d
		"--color-error-800": "131 61 61", // #833d3d
		"--color-error-900": "107 50 50", // #6b3232
		// surface | #768bcb 
		"--color-surface-50": "234 238 247", // #eaeef7
		"--color-surface-100": "228 232 245", // #e4e8f5
		"--color-surface-200": "221 226 242", // #dde2f2
		"--color-surface-300": "200 209 234", // #c8d1ea
		"--color-surface-400": "159 174 219", // #9faedb
		"--color-surface-500": "118 139 203", // #768bcb
		"--color-surface-600": "106 125 183", // #6a7db7
		"--color-surface-700": "89 104 152", // #596898
		"--color-surface-800": "71 83 122", // #47537a
		"--color-surface-900": "58 68 99", // #3a4463
		
	}
}