.PHONY: help lint lint-fix format format-check check

help:
	@echo "DRJ Solutions — formatting and linting"
	@echo ""
	@echo "  make lint          Run ESLint"
	@echo "  make lint-fix      Run ESLint and apply safe fixes"
	@echo "  make format        Format files with Prettier"
	@echo "  make format-check  Check formatting without writing"
	@echo "  make check         Lint and check formatting"

lint:
	npm run lint

lint-fix:
	npm run lint:fix

format:
	npm run format

format-check:
	npm run format:check

check: lint format-check
